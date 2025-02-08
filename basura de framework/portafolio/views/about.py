import reflex as rx
from portafolio.components.heading import heading
# from portafolio.styles.styles import BASE_STYLE, MAX_WIDTH, STYLESHEETS, EmSize, Size


def about(description: str, is_es = False) -> rx.Component:
    return rx.vstack(
        heading("About me") if not is_es else heading("Sobre mi"),
        rx.text(description),
    )
