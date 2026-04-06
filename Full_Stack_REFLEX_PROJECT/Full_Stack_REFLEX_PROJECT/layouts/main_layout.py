import reflex as rx
from ..components.navbar import navbar
from ..state import State


def main_layout(content):
    return rx.box(

        navbar(),

        rx.box(
            content,
            padding="2em",
        ),

        # ✅ DARK MODE FIX
        bg=rx.cond(State.dark_mode, "#0f172a", "#ffffff"),
        color=rx.cond(State.dark_mode, "white", "black"),

        min_height="100vh"
    )