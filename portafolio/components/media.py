import reflex as rx
from portafolio.components.icon_button import icon_button
from portafolio.data import Media
from portafolio.styles.styles import Size
from portafolio.components.links import link



def media(data: Media) -> rx.Component:
    d: dict = {
        "file-text": data.cv,
        "github": data.github,
        "linkedin": data.likedin,
    }
    
    return rx.flex(
        icon_button(
            "mail",
            f"mailto:{data.email}",
            data.email,
            True
        ),
        link(d),
        spacing=Size.SMALL.value,
        flex_direction=["column", "column", "row"]
    )
