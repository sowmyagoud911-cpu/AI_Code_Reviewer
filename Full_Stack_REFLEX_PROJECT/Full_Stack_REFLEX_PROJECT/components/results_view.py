import reflex as rx
from Full_Stack_REFLEX_PROJECT.state import State


def result_view():
    return rx.box(

        rx.heading("Results", size="5"),

        rx.text("Grade:"),
        rx.badge(State.result.grade),

        rx.text("Issues:"),
        rx.foreach(
            State.result.issues,
            lambda item: rx.hstack(
                rx.text("•"),
                rx.text(item)
            )
        ),

        rx.text("Suggestions:"),
        rx.foreach(
            State.result.suggestions,
            lambda item: rx.hstack(
                rx.text("•"),
                rx.text(item)
            )
        ),

        rx.text("Improved Code:"),
        rx.code_block(State.result.improved_code),

        padding="20px",
        border="1px solid #ddd",
        border_radius="12px",
        margin_top="20px",
        width="100%",
    )