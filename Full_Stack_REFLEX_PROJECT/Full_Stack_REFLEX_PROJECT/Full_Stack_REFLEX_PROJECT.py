import reflex as rx
from .components.analyze_page import analyze_page
from .components.history_page import history_page
from .components.about_page import about_page
from .layouts.main_layout import main_layout


def index():
    return main_layout(analyze_page())


def history():
    return main_layout(history_page())


def about():
    return main_layout(about_page())


app = rx.App()
app.add_page(index, route="/")
app.add_page(history, route="/history")
app.add_page(about, route="/about")

