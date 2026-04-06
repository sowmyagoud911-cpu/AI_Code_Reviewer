def clean_ai_output(text: str):
    if not text:
        return ""

    text = text.replace("```python", "").replace("```", "").strip()
    return text