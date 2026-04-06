import reflex as rx
import requests
import json
from pydantic import BaseModel
from typing import List


class AnalysisResult(BaseModel):
    grade: str = ""
    issues: List[str] = []
    suggestions: List[str] = []
    improved_code: str = ""


class State(rx.State):
    code: str = ""
    language: str = "Python"

    result: AnalysisResult = AnalysisResult()
    history: list[AnalysisResult] = []

    # ✅ DARK MODE
    dark_mode: bool = False

    def toggle_theme(self):
        self.dark_mode = not self.dark_mode

    # ✅ SETTERS
    def set_code(self, value: str):
        self.code = value

    def set_language(self, value: str):
        self.language = value

    # ✅ ANALYZE
    def analyze_code(self):
        try:
            res = requests.post(
                "http://127.0.0.1:8001/analyze",
                json={
                    "code": self.code,
                    "language": self.language
                }
            )

            data = res.json()

            self.result = AnalysisResult(
                grade=data.get("grade", ""),
                issues=data.get("issues", []),
                suggestions=data.get("suggestions", []),
                improved_code=data.get("improved_code", "")
            )

            self.history.append(self.result.copy())

        except Exception as e:
            self.result = AnalysisResult(
                grade="Error",
                issues=[str(e)],
                suggestions=["Check backend connection"],
                improved_code=""
            )

    # ✅ DOWNLOAD FIX
    def download_report(self):
        return rx.download(
            data=json.dumps(self.result.dict(), indent=2),
            filename="report.json"
        )