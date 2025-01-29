import reflex as rx
from portafolio import data
from portafolio.styles.styles import BASE_STYLE, MAX_WIDTH, STYLESHEETS, EmSize, Size, glassmorphism
from portafolio.views.about import about
from portafolio.views.footer import footer
from portafolio.views.header import header
# from portafolio.views.navbar import navbar
from portafolio.views.info import info
from portafolio.views.tech_stack import tech_stack

selected_language = "es"

try:
    DATA = data.load_data(selected_language)
except ValueError as e:
    print(e)
    exit()

@rx.page(route="/es", title="Edizon Leal | Portafolio")
def index_es() -> rx.Component:
    return rx.center(
        # rx.theme_panel(),
        # rx.hstack(navbar()),
        rx.vstack(
            header(DATA),
            about(DATA.about, is_es=True),
            rx.divider(bg= "black"),
            tech_stack(DATA.technologies),
            info("Proyectos", DATA.projects),
            info("Capacitación", DATA.training),
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
    index_es,
    title=title,
    description=description,
    image=image,
    meta=[
        {"name": "og:title", "content": title},
        {"name": "og:description", "content": description},
        {"name": "og:image", "content": image}
    ]
)