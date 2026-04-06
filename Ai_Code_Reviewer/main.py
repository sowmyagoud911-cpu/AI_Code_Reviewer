from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel

from Ai_Code_Reviewer.analyzer import analyze_code
from Ai_Code_Reviewer.report_generator import generate_pdf

app = FastAPI(title="AI Code Reviewer")

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Temporary in-memory history (no MongoDB)
history_data = []

class CodeRequest(BaseModel):
    code: str

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"message": "API running"}

@app.post("/analyze")
def analyze(req: CodeRequest):
    if not req.code.strip():
        raise HTTPException(400, "Empty code")

    result = analyze_code(req.code)

    print("📤 Sending Response:", result)   # ✅ THIS FIXES VISIBILITY

    return result

@app.get("/history")
def history():
    return history_data[::-1]

@app.post("/chat")
def chat(req: ChatRequest):
    result = analyze_code(req.message)
    return {"response": result["improved_code"]}


@app.post("/download")
def download(req: CodeRequest):
    result = analyze_code(req.code)
    file_path = generate_pdf(result)

    return FileResponse(
        path=file_path,
        filename="report.pdf",
        media_type='application/pdf'
    )