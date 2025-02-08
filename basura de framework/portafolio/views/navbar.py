import reflex as rx
from portafolio.styles.styles import glassmorphism
from portafolio.components.popover import popover

def navbar(is_es: bool = False) -> rx.Component:
    l_en: dict = {
        "English": "/",
        "Spanish": "/es"
    }
    
    l_es: dict = {
        "Ingles": "/",
        "Español": "/es"
    }
    
    p_en: dict = {
        "home": "/",
        "Services": "/services",
        "Projects": "/projects",
    }
    
    p_es: dict = {
        "Inicio": "/es",
        "Servicios": "/es-services",
        "Proyectos": "/es-projects",
    }
    
    return rx.vstack(
        # rx.spacer(),
        popover(
          rx.button(
                rx.icon("flower-2", size=20),
                size='1'
            ), p_en if not is_es else p_es 
        ),
        popover(
            rx.button(
                rx.icon("languages", size=20),
                size='1'
            ), l_en if not is_es else l_es
        ),
        rx.color_mode.button(
            rx.color_mode_cond(
                dark=rx.icon("sun", size=20),
                light=rx.icon("moon", size=20),    
            ),
            size='1'
        ),
        position="absolute", 
        top="10px", right="5px",
        tyle=glassmorphism,
    )
