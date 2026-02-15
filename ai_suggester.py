import os
from dotenv import load_dotenv

# Load API key from .env
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Check if API key is loaded (optional, for Milestone 1 demonstration)
if GROQ_API_KEY:
    print("API key loaded successfully:", GROQ_API_KEY[:4] + "****")
else:
    print("API key not found. Check your .env file.")


def suggest_code_improvements(code):
    """
    Placeholder function for AI suggestions.
    Milestone 1: Simply prints a mock suggestion.
    """
    print("\n=== AI Suggestions Placeholder ===")
    print(f"Received code:\n{code}")
    print("Suggestion: Code formatting looks good. Further AI suggestions coming in next milestone.\n")


# Test the placeholder when running this file directly
if __name__ == "__main__":
    # Example test code
    test_code = "def add(a,b): return a+b"
    suggest_code_improvements(test_code)
