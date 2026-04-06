import reflex as rx

def about_page():
    return rx.vstack(
        rx.heading("About", size="7"),
        rx.text("AI Code Reviewer built using FastAPI + Reflex."),
        spacing="4",
    )