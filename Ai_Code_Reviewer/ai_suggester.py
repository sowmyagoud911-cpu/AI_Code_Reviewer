import os
from dotenv import load_dotenv

load_dotenv()

groq_api_key = os.getenv("GROQ_API_KEY")

# ❌ DO NOT initialize model here

def get_ai_suggestions(code_string: str):
    # If no API key → safe fallback
    if not groq_api_key:
        return "⚠️ AI suggestions unavailable (No API key configured)"

    try:
        from langchain_groq import ChatGroq
        from langchain_core.prompts import PromptTemplate

        # ✅ Initialize INSIDE function (lazy loading)
        model = ChatGroq(
            model="openai/gpt-oss-20b",
            groq_api_key=groq_api_key
        )

        prompt = PromptTemplate.from_template(
            """
You are an experienced AI teacher.

Analyze the following Python code and provide:
- Errors (if any)
- Improvements
- Time & space complexity (brief)
- Suggestions with explanation

Code:
{code}
"""
        )

        formatted_prompt = prompt.format(code=code_string)

        result = model.invoke(formatted_prompt)

        return result.content

    except Exception as e:
        return f"⚠️ AI Error: {str(e)}"