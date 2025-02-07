import reflex as rx
from portafolio import data
from portafolio.styles.styles import BASE_STYLE, MAX_WIDTH, STYLESHEETS, EmSize, Size, glassmorphism

from portafolio.views.about import about
from portafolio.views.footer import footer
from portafolio.views.header import header
from portafolio.views.navbar import navbar
from portafolio.views.info import info
from portafolio.views.tech_stack import tech_stack

from portafolio.components.button_see_more import see_more

from portafolio.pages.services import index_services
from portafolio.pages.es import index_es
from portafolio.pages.es_services import index_es_services
from portafolio.pages.es_projects import es_projects
from portafolio.pages.projects import projects

selected_language = "en"

try:
    DATA = data.load_data(selected_language)
except ValueError as e:
    print(e)
    exit()

def index() -> rx.Component:

    return rx.center(
        # rx.theme_panel(),
        rx.hstack(navbar()),
        rx.vstack(
            header(DATA),
            about(DATA.about),
            rx.divider(bg= "black"),
            tech_stack(DATA.technologies),
            rx.vstack(
                info("Projects", DATA.projects, view_link=True),
                see_more(),
            ),
            info("Training", DATA.training),
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
    stylesheets=STYLESHEETS,
    style=BASE_STYLE,
    theme=rx.theme(
        accent_color="cyan",
        radius="full"

    ),
)

title = DATA.title
description = DATA.description
image = DATA.image

app.add_page(
    index,
    title=title,
    description=description,
    image=image,
    meta=[
        {"name": "og:title", "content": title},
        {"name": "og:description", "content": description},
        {"name": "og:image", "content": image}
    ]
)