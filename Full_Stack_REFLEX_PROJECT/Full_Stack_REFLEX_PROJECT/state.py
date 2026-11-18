
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

    dark_mode: bool = False

    def toggle_theme(self):
        self.dark_mode = not self.dark_mode

    def set_code(self, value: str):
        self.code = value

    def set_language(self, value: str):
        self.language = value


    async def analyze_code(self):
        try:
            response = await rx.run_in_thread(
                lambda: requests.post(
                    "http://127.0.0.1:8001/analyze",
                    json={
                        "code": self.code,
                        "language": self.language
                    },
                    timeout=30
                )
            )

            response.raise_for_status()
            response_data = response.json()

            self.result = AnalysisResult(
                grade=response_data.get("grade", ""),
                issues=response_data.get("issues", []),
                suggestions=response_data.get("suggestions", []),
                improved_code=response_data.get("improved_code", "")
            )

            self.history.append(self.result.copy())

        except Exception as e:
            self.result = AnalysisResult(
                grade="Error",
                issues=[str(e)],
                suggestions=["Check backend connection"],
                improved_code=""
            )

    def download_report(self):
        return rx.download(
            data=json.dumps(self.result.dict(), indent=2),
            filename="report.json"
        )
