import reflex as rx
from portafolio.styles.styles import Size, glassmorphism
from portafolio.components.links import link

def modal(view: rx.Component, project: dict) -> rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(view),
        rx.dialog.content(
            rx.dialog.title(project["title"]),
            rx.flex(
                *[
                    rx.badge(
                        rx.box(class_name=f"devicon-{tech}-plain"),
                        tech,
                        color_scheme="gray"
                    )
                    for tech in project["technology"]
                ],
                wrap="wrap",
                spacing=Size.SMALL.value
            ),       
            rx.dialog.description(
                rx.markdown(project["content"]),
                margin_buttom="16px",
            ),
            link(project["url"]),
            rx.dialog.close(
                rx.button("Close Dialog", size="1"),
                margin_top="16px",
            ),
            # spacing=Size.DEFAULT.value
        ),
        style=glassmorphism, 
    )