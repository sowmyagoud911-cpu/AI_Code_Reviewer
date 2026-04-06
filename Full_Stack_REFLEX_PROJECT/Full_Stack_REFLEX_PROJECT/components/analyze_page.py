import reflex as rx
from ..state import State


def analyze_page():
    return rx.vstack(

        rx.heading("Analyze Your Code", size="5"),

        # ✅ LANGUAGE DROPDOWN
        rx.select(
            ["Python", "Java", "C++", "JavaScript"],
            value=State.language,
            on_change=State.set_language
        ),

        # ✅ CODE INPUT
        rx.text_area(
            placeholder="Paste your code here...",
            value=State.code,
            on_change=State.set_code,
            width="100%",
            height="200px"
        ),

        # ✅ BUTTONS
        rx.hstack(
            rx.button("Analyze", on_click=State.analyze_code),
            rx.button("Download Report", on_click=State.download_report),
            spacing="3"
        ),

        # ✅ RESULTS
        rx.box(

            rx.heading("Results", size="4"),

            rx.text(f"Grade: {State.result.grade}"),

            rx.heading("Issues:", size="3"),
            rx.foreach(State.result.issues, lambda i: rx.text("• " + i)),

            rx.heading("Suggestions:", size="3"),
            rx.foreach(State.result.suggestions, lambda s: rx.text("• " + s)),

            rx.heading("Improved Code:", size="3"),
            rx.code_block(State.result.improved_code),

            margin_top="20px"
        ),

        width="100%",
        align="start"
    )