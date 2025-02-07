import reflex as rx
from portafolio.styles.styles import glassmorphism

def popover(b: rx.Component, c: dict) -> rx.Component:
    return rx.popover.root(
        rx.popover.trigger(
          b,  
        ),
        rx.popover.content(
            rx.flex(
                *[
                    rx.button(clave, on_click=[rx.redirect(value)])
                    for clave, value in c.items()
                ],
                rx.popover.close(
                    rx.button("Close"),
                ),
                direction="column",
                spacing="3",
            ),
        ),
        style=glassmorphism,   
    )