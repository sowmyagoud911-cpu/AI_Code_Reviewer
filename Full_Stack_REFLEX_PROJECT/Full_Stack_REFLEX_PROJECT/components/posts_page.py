import reflex as rx
from components.navbar import navbar
from components.footer import footer

def posts():
    return rx.vstack(
        navbar(),
        rx.text("Posts page..."),
        footer(),
    )