from dotenv import load_dotenv
import os

# Force correct path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
env_path = os.path.join(BASE_DIR, ".env")

load_dotenv(env_path, override=True)

class Settings:
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")

settings = Settings()

# DEBUG
print("KEY:", settings.GROQ_API_KEY)