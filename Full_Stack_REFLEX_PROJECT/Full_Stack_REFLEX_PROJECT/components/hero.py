import reflex as rx
import os

def hero():
    img_path = os.path.abspath("chat_bot_rafiki.png")  # Use absolute path
    return rx.hstack(
        rx.vstack(
            rx.heading("Review Your Code with AI", size="9"),
            rx.text(
                "Detect bugs, improve code quality, and get AI-powered suggestions instantly.",
                color="gray",
                font_size="18px"
            ),
            rx.hstack(
                rx.button("Start Reviewing", color_scheme="blue"),
                rx.button("Try Demo", variant="outline"),
                spacing="4",
                margin_top="20px"
            ),
            align="start",
            spacing="5",
            width="50%"
        ),
        rx.image(
            src=img_path,
            width="50%",
            border_radius="10px"
        ),
        padding="60px",
        width="100%",
        align="center"
    )