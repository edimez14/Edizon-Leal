import reflex as rx
from portafolio import data

from portafolio.styles.styles import BASE_STYLE, MAX_WIDTH, STYLESHEETS, EmSize, Size, glassmorphism

from portafolio.api.api import fetch_projects
from portafolio.state.state_api import ProjectState

from portafolio.views.footer import footer
from portafolio.views.header import header
from portafolio.views.navbar import navbar
from portafolio.views.project import project

selected_language = "es"

try:
    DATA = data.load_data(selected_language)
except ValueError as e:
    print(e)
    exit()

@rx.page(route="/es-projects", title="Edizon Leal | Proyectos")
def es_projects() -> rx.Component:
    return rx.center(
        # rx.theme_panel(),
        rx.hstack(navbar(is_es=True)),
        rx.vstack(
            # header(DATA),
            # rx.divider(bg= "black"),
            project(is_es = True),
            rx.divider(bg= "black"),
            footer(DATA.media),
            spacing=Size.XBIG.value,
            padding_x=EmSize.MEDIUM.value,
            padding_y=EmSize.MEDIUM.value,
            max_width=MAX_WIDTH,
            width="100%",
            style=glassmorphism,
        ),
        padding_x=EmSize.MEDIUM.value,
        padding_y=EmSize.MEDIUM.value,
    )


app = rx.App(
    state=ProjectState,
    stylesheets=STYLESHEETS,
    style=BASE_STYLE,
    theme=rx.theme(
        accent_color="cyan",
        has_background=True,
        radius="full"

    ),
)

title = DATA.title
description = DATA.description
image = DATA.image

app.add_page(
    es_projects,
    title=title,
    description=description,
    image=image,
    meta=[
        {"name": "og:title", "content": title},
        {"name": "og:description", "content": description},
        {"name": "og:image", "content": image}
    ]
)
