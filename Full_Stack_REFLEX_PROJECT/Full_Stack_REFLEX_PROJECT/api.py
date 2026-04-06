import requests

BASE_URL = "http://127.0.0.1:8001"

def analyze_code_api(code: str):
    try:
        res = requests.post(f"{BASE_URL}/analyze", json={"code": code})
        return res.json()
    except Exception as e:
        return {"error": str(e)}