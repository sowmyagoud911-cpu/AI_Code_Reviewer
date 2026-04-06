import reflex as rx
from ..state import State


def navbar():
    return rx.hstack(

        rx.heading("🚀 AI Code Reviewer", size="6"),

        rx.spacer(),

        rx.hstack(
            rx.link("Analyze", href="/"),
            rx.link("History", href="/history"),
            rx.link("About", href="/about"),
            spacing="4"
        ),

        # ✅ DARK MODE BUTTON
        rx.button(
            rx.cond(State.dark_mode, "🌙", "☀️"),
            on_click=State.toggle_theme
        ),

        padding="1em",
        width="100%",
        border_bottom="1px solid #ddd"
    )