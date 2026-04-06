import reflex as rx
from components.navbar import navbar
from components.hero import hero
from components.footer import footer


def index():
    return rx.vstack(
        navbar(),
        hero(),
        footer(),
        spacing="0",
    )


app = rx.App()
app.add_page(index, route="/")