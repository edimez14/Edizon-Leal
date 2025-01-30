import reflex as rx
from portafolio.components.icon_button import icon_button
from portafolio.styles.styles import Size

def link(dics: dict) -> rx.Component:
    return rx.hstack(
        *[
            icon_button(
                clave,
                value
            )
            for clave, value in dics.items()
        ],
        spacing=Size.SMALL.value
    )