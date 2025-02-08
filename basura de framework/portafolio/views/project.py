import reflex as rx
# from portafolio.data import Service
from portafolio.styles.styles import Size

from portafolio.state.state_api import ProjectState

from portafolio.components.heading import heading
from portafolio.components.card_detail import card_detail
from portafolio.components.modals import modal


def project(is_es: bool = False) -> rx.Component:
    return rx.vstack(
        heading("Projects") if not is_es else heading("Proyectos"),
        rx.mobile_only(
            rx.vstack(
                rx.foreach(
                    ProjectState.projects,
                    lambda item: modal(
                        card_detail(
                            item.title, 
                            item.description,
                            item.featured_image.url if item.featured_image else ""
                        ),
                        item
                    ),
                ),
                # *[
                #     modal(card_detail(info["title"], info["description"], info["image_url"]), info)
                #     for info in data.items()
                # ],
                spacing=Size.DEFAULT.value
            ),
            width="100%"
        ),
        rx.tablet_and_desktop(
            rx.grid(
                rx.foreach(
                    ProjectState.projects,
                    lambda item: modal(
                        card_detail(
                            item.title, 
                            item.description,
                            item.featured_image.url if item.featured_image else ""
                        ),
                        item
                    )
                ),
                # *[
                #     modal(card_detail(info["title"], info["description"], info["image_url"]), info)
                #     for info in data.items()
                # ],
                spacing=Size.DEFAULT.value,
                columns="2"
            ),
            width="100%"
        ),
        on_mount=ProjectState.get_projects,
        align="center",
        spacing=Size.MEDIUM.value,
        width="100%"
    )
