import reflex as rx
# from portafolio.data import Service
from portafolio.styles.styles import Size

from portafolio.components.heading import heading
from portafolio.components.card_detail import card_detail
from portafolio.components.modals import modal


def project(is_es: bool = False) -> rx.Component:
    return rx.vstack(
        heading("Projects") if not is_es else heading("Proyectos"),
        rx.mobile_only(
            rx.vstack(
                *[
                    modal(card_detail())
                    for service in range(10)
                ],
                spacing=Size.DEFAULT.value
            ),
            width="100%"
        ),
        rx.tablet_and_desktop(
            rx.grid(
                *[
                    modal(card_detail())
                    for service in range(10)
                ],
                spacing=Size.DEFAULT.value,
                columns="2"
            ),
            width="100%"
        ),
        align="center",
        spacing=Size.MEDIUM.value,
        width="100%"
    )
