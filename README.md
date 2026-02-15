# AI Code Reviewer - Milestone 1

This project accepts Python code, parses it using AST, and formats it for readability.
Future versions will provide AI-generated suggestions using Groq AI.

## Setup

1. Create virtual environment:
   python -m venv .venv
2. Activate virtual environment:
   .venv\Scripts\Activate  (Windows)
   source .venv/bin/activate (Mac/Linux)
3. Install dependencies:
   pip install -r requirements.txt
4. Add your Groq API key in `.env`:
   GROQ_API_KEY="your_key_here"

## Usage

Run the code parser:

```powershell
python code_parser.py
