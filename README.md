# 🤖 AI Code Reviewer

An AI-powered Code Reviewer that performs static analysis of Python source code using the **Abstract Syntax Tree (AST)** and generates intelligent code review suggestions using an LLM. The project consists of a **FastAPI backend** and a **Reflex frontend**, providing an interactive interface for analyzing Python code.

---

## 🚀 Features

- Analyze Python source code
- Detect syntax errors
- Parse code using Python AST
- Extract functions and imports
- Generate AI-powered code review suggestions
- Format Python code automatically
- FastAPI REST API
- Interactive Reflex frontend
- Modular and scalable architecture

---

## 🛠️ Tech Stack

### Frontend
- Reflex

### Backend
- FastAPI
- Uvicorn

### AI & Code Analysis
- Python AST
- Groq LLM API

### Libraries
- python-dotenv
- Pydantic

### Tools
- Git
- GitHub
- VS Code

---

# 📂 Project Structure

```
AI_Code_Reviewer/
│
├── Ai_Code_Reviewer/
│   ├── Ai_Code_Reviewer.py
│   ├── ai_engine.py
│   ├── ai_suggester.py
│   ├── analyzer.py
│   ├── code_parser.py
│   ├── detector.py
│   ├── report_generator.py
│   ├── visitor.py
│   ├── utils.py
│   ├── config.py
│   ├── main.py
│   └── __init__.py
│
├── assets/
├── requirements.txt
├── rxconfig.py
└── README.md


Full_Stack_REFLEX_PROJECT/

├── components/
│   ├── about_page.py
│   ├── analyze_page.py
│   ├── card.py
│   ├── editor.py
│   ├── footer.py
│   ├── hero.py
│   ├── history_page.py
│   ├── home_page.py
│   ├── navbar.py
│   ├── loader.py
│   ├── posts_page.py
│   └── results_view.py
│
├── layouts/
├── api.py
├── state.py
├── styles.py
├── theme.py
└── Full_Stack_REFLEX_PROJECT.py
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/AI_Code_Reviewer.git

cd AI_Code_Reviewer
```

---

### Create Virtual Environment

```bash
python -m venv .venv
```

---

### Activate Environment

**Windows**

```bash
.venv\Scripts\activate
```

**Linux/macOS**

```bash
source .venv/bin/activate
```

---

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

# 🔑 Environment Variables

Create a `.env` file.

```env
GROQ_API_KEY=your_api_key_here
```

---

# ▶️ Running the Backend

```bash
uvicorn Ai_Code_Reviewer.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# ▶️ Running the Frontend

```bash
cd Full_Stack_REFLEX_PROJECT

reflex run
```

Frontend URL

```
http://localhost:3000
```

---

# 📡 API Endpoint

## Analyze Python Code

**POST**

```
/analyze
```

### Request

```json
{
  "code": "import os\n\ndef hello():\n    print('Hello World')"
}
```

### Response

```json
{
  "status": "success",
  "functions": [
    "hello"
  ],
  "imports": [
    "os"
  ],
  "formatted_code": "import os\n\ndef hello():\n    print('Hello World')"
}
```

---

# 🔄 Project Workflow

1. User enters Python code in the Reflex frontend.
2. The frontend sends the code to the FastAPI backend.
3. The backend parses the source code using Python AST.
4. Static analysis extracts:
   - Functions
   - Imports
   - Syntax errors
   - Code structure
5. The AI engine generates intelligent review suggestions.
6. Results are returned to the frontend and displayed to the user.

---

# 📌 Modules

| Module | Description |
|---------|-------------|
| `code_parser.py` | Parses Python source code into an AST |
| `analyzer.py` | Performs static code analysis |
| `visitor.py` | Traverses AST nodes |
| `detector.py` | Detects syntax errors |
| `ai_engine.py` | Handles AI prompt generation |
| `ai_suggester.py` | Generates AI-based review suggestions |
| `report_generator.py` | Creates structured review reports |
| `main.py` | FastAPI backend |
| `api.py` | Connects Reflex frontend with FastAPI backend |

---

# 📈 Future Enhancements

- Code complexity analysis
- Security vulnerability detection
- Multi-language support
- Authentication
- Code quality score
- Export reports (PDF/HTML)
- Docker support
- CI/CD integration
