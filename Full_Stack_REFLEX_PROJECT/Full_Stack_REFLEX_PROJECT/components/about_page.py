
import reflex as rx


def about_page():
    return rx.vstack(
        rx.heading("About AI Code Reviewer", size="6"),

        rx.text(
            "AI Code Reviewer is an AI-powered application "
            "that analyzes source code and provides useful feedback."
        ),

        rx.heading("Features", size="4"),
        rx.text("• Code analysis and grading"),
        rx.text("• Issue detection"),
        rx.text("• AI-generated suggestions"),
        rx.text("• Improved code generation"),
        rx.text("• Analysis history"),
        rx.text("• Downloadable reports"),

        width="100%",
        padding="20px",
        align="start",
        spacing="3",
    )
