import reflex as rx 

config = rx.Config(
    app_name="Full_Stack_REFLEX_PROJECT",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)