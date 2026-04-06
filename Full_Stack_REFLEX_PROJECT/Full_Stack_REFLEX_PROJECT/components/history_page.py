import reflex as rx
from Full_Stack_REFLEX_PROJECT.state import State


def history_page():
    return rx.vstack(

        rx.heading("History", size="6"),

        rx.foreach(
            State.history,

            lambda item: rx.box(

                rx.text("Grade:"),
                rx.badge(item.grade),

                rx.text("Issues:"),
                rx.foreach(
                    item.issues.to(list),   # ✅ FIX
                    lambda i: rx.hstack(
                        rx.text("•"),
                        rx.text(i)
                    )
                ),

                rx.text("Suggestions:"),
                rx.foreach(
                    item.suggestions.to(list),   # ✅ FIX
                    lambda s: rx.hstack(
                        rx.text("•"),
                        rx.text(s)
                    )
                ),

                rx.text("Improved Code:"),
                rx.code_block(item.improved_code),

                padding="15px",
                border="1px solid #ddd",
                border_radius="10px",
                margin_bottom="10px",
            )
        ),

        padding="20px",
    )