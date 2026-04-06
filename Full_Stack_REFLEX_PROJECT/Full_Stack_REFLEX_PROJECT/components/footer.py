import reflex as rx

def footer():
    return rx.vstack(
        rx.hstack(
            rx.link("About", href="/about"),
            rx.link("GitHub", href="https://github.com"),
            rx.link("Contact", href="/contact"),
            spacing="6",
        ),
        rx.text("Built with Reflex"),
        rx.text("© 2026 AI Code Reviewer"),
        spacing="3",
        padding="20px",
        border_top="1px solid #eee",
        width="100%",
        align="center"
    )