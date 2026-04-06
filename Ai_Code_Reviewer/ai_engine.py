from groq import Groq
from Ai_Code_Reviewer.config import settings

def generate_ai_review(code):
    client = Groq(api_key=settings.GROQ_API_KEY)

    prompt = f"""
You are a Python expert.

Fix issues and improve this code.
Return ONLY improved code.

Code:
{code}
"""

    # 🔥 Model fallback list (latest safe approach)
    models = [
        "llama-3.1-8b-instant",
        "llama3-8b-8192",
        "llama3-70b-8192"
    ]

    for model in models:
        try:
            response = client.chat.completions.create(
                model=model,
                messages=[{"role": "user", "content": prompt}],
            )
            return response.choices[0].message.content

        except Exception as e:
            print(f"Model {model} failed:", e)
            continue

    return "ERROR: All models failed"