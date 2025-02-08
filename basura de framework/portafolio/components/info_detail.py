import reflex as rx
from portafolio.components.icon_badge import icon_badge
from portafolio.components.icon_button import icon_button
from portafolio.data import Info
from portafolio.components.links import link
from portafolio.styles.styles import IMAGE_HEIGHT, EmSize, STYLESHEETS, Size


def info_detail(info: Info, view_link=False) -> rx.Component:
    d: dict = {
        "link": info.url,
        "github": info.github,
    }
    return rx.flex(
        rx.hstack(
            icon_badge(info.icon),
            rx.vstack(
                rx.text.strong(info.title),
                rx.text(info.subtitle),
                rx.text(
                    info.description,
                    size=Size.SMALL.value,
                    color_scheme="gray"
                ),
                rx.cond(
                    info.technologies,
                    rx.flex(
                        *[
                            rx.badge(
                                rx.box(class_name=technology.icon),
                                technology.name,
                                color_scheme="gray"
                            )
                            for technology in info.technologies
                        ],
                        wrap="wrap",
                        spacing=Size.SMALL.value
                    )
                ),
                rx.cond(info.url != "", rx.text("")) if not view_link else link(d),
                spacing=Size.SMALL.value,
                width="100%"
            ),
            spacing=Size.DEFAULT.value,
            width="100%"
        ),
        rx.cond(
            info.image != "",
            rx.image(
                src=info.image,
                height=IMAGE_HEIGHT,
                width="auto",
                border_radius=EmSize.DEFAULT.value,
                object_fit="cover"
            )
        ),
        rx.vstack(
            rx.cond(
                info.date != "",
                rx.badge(info.date)
            ),
            rx.cond(
                info.certificate != "",
                icon_button(
                    "shield-check",
                    info.certificate,
                    solid=True
                )
            ),
            spacing=Size.SMALL.value,
            align="end"
        ),
        flex_direction=["column-reverse", "row"],
        spacing=Size.DEFAULT.value,
        width="100%"
    )
