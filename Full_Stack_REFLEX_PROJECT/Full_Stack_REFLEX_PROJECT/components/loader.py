import reflex as rx

def loader():
    return rx.center(
        rx.spinner(size="3"),
        padding="2em",
    )