import json
from groq import Groq
from Ai_Code_Reviewer.config import settings


def generate_ai_review(code, language, static_result):
    """
    Generate a structured AI code review using Groq.
    Returns a dictionary or None if AI review fails.
    """

    if not settings.GROQ_API_KEY:
        print("Groq API key is not configured.")
        return None

    try:
        client = Groq(api_key=settings.GROQ_API_KEY)

        prompt = f"""
You are an experienced senior software engineer and code reviewer.

Review the following {language} code.

Identify:
1. Actual bugs and errors.
2. Syntax or logical problems.
3. Performance and code-quality improvements.
4. Security concerns, if any.
5. Brief explanations and actionable suggestions.
6. A corrected version of the code, if improvements are needed.

Do not invent problems. Do not make unnecessary changes.
Preserve the original functionality.
If the code is already good, explain that honestly.

Existing static analysis:
{json.dumps(static_result, ensure_ascii=False)}

Return ONLY a valid JSON object in this exact structure:
{{
    "grade": "A",
    "issues": ["Issue description"],
    "suggestions": ["Suggestion with explanation"],
    "improved_code": "Complete improved source code"
}}

Grade guidelines:
A = Good code with no significant issues.
B = Some issues or improvements needed.
C = Multiple significant issues.
Do not use any grade other than A, B, or C.

Language: {language}

Code:
{code}
"""

        response = client.chat.completions.create(
            model=settings.GROQ_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": "You review source code carefully and return valid JSON only."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.2,
            max_tokens=3000
        )

        content = response.choices[0].message.content

        if not content:
            return None

        # Extract JSON if the model includes surrounding text or code fences.
        start = content.find("{")
        end = content.rfind("}")

        if start == -1 or end == -1:
            return None

        result = json.loads(content[start:end + 1])

        if not isinstance(result, dict):
            return None

        grade = result.get("grade")
        issues = result.get("issues")
        suggestions = result.get("suggestions")
        improved_code = result.get("improved_code")

        if grade not in ["A", "B", "C"]:
            return None

        if not isinstance(issues, list) or not all(
            isinstance(item, str) for item in issues
        ):
            return None

        if not isinstance(suggestions, list) or not all(
            isinstance(item, str) for item in suggestions
        ):
            return None

        if not isinstance(improved_code, str):
            return None

        return {
            "grade": grade,
            "issues": issues,
            "suggestions": suggestions,
            "improved_code": improved_code
        }

    except Exception as e:
        print("Groq AI review failed:", str(e))
        return None