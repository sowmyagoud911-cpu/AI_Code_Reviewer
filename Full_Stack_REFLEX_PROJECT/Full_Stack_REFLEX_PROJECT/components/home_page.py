import reflex as rx

def home_page():
    return rx.center(
        rx.vstack(
            rx.heading("Welcome to AI Code Reviewer 🚀", size="8"),
            rx.text("Analyze your code with AI instantly."),
            rx.link(
                rx.button("Start Analyzing"),
                href="/analyze"
            ),
            spacing="5",
        ),
        height="80vh",
    )