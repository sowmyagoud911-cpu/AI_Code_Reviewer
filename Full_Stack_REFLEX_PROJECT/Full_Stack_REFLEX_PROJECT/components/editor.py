import reflex as rx
from ..state import State


def editor():
    return rx.text_area(
        placeholder="Paste your Python code here...",
        on_change=State.set_code,
        width="100%",
        height="300px"
    )