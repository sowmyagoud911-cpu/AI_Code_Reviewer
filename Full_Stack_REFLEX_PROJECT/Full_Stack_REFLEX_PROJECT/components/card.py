import reflex as rx

def card(title, content):
    return rx.box(
        rx.heading(title, size="4"),
        rx.text(content, white_space="pre-wrap"),
        padding="16px",
        border_radius="16px",
        bg=rx.color("gray", 2),
        box_shadow="0 6px 25px rgba(0,0,0,0.2)",
        width="100%",
        margin_y="10px",
    )