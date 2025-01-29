import reflex as rx
# from portafolio.data import Service

from portafolio.styles.styles import IMAGE_HEIGHT, MAX_WIDTH, STYLESHEETS, EmSize, Size


def card_detail() -> rx.Component:
    return rx.link(
        rx.card(
            rx.box(
                rx.mobile_and_tablet(
                    rx.box(
                        rx.flex(
                            rx.inset(
                                rx.image(
                                    src="/work_1.png",
                                    height=IMAGE_HEIGHT,
                                    width="100%",
                                    object_fit="cover"
                                ),
                                pb=Size.DEFAULT.value,
                                side="top",
                            ),
                            rx.box(
                                rx.heading("Quick Start"),
                                rx.text(
                                    "Get started with Reflex in 5 minutes."
                                ),
                                padding="1em",
                            ),
                            spacing="2",
                            direction="column",
                            width="auto",
                        ),
                        width="auto",
                    ),
                ),
                rx.desktop_only(
                    rx.box(
                        rx.flex(
                            rx.inset(
                                rx.box(
                                    background="center/cover url('/work_1.png')",
                                    height="100%",
                                ),
                                side="left",
                                width="100%",
                            ),
                            rx.box(
                                rx.heading("Quick Start"),
                                rx.text(
                                    "Get started with Reflex in 5 minutes."
                                ),
                                padding="1em",
                            ),
                            spacing="2",
                            direction="row",
                            width="100%",
                        ),
                        width="100%",
                    ),  
                ),
            ),
            as_child=True,
            size="5",
            variant="surface",
            background_color="transparent",
        ),
    )
