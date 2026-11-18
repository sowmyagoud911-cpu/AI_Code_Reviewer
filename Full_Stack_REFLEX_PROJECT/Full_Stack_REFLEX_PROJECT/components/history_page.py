
import reflex as rx
from ..state import State


def history_page():
    return rx.vstack(
        rx.heading("History", size="6"),

        rx.cond(
            State.history.length() > 0,
            rx.foreach(
                State.history,
                lambda item: rx.box(
                    rx.hstack(
                        rx.text("Grade:"),
                        rx.badge(item.grade),
                        spacing="2",
                    ),

                    rx.heading("Issues", size="3"),
                    rx.foreach(
                        item.issues,
                        lambda issue: rx.text("• " + issue),
                    ),

                    rx.heading("Suggestions", size="3"),
                    rx.foreach(
                        item.suggestions,
                        lambda suggestion: rx.text("• " + suggestion),
                    ),

                    rx.heading("Improved Code", size="3"),
                    rx.code_block(item.improved_code),

                    padding="15px",
                    border="1px solid #ddd",
                    border_radius="10px",
                    width="100%",
                    margin_bottom="10px",
                ),
            ),
            rx.text("No analysis history yet. Analyze some code first."),
        ),

        padding="20px",
        width="100%",
        align="start",
    )
