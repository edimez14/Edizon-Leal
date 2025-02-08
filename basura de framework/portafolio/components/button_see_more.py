import reflex as rx

def see_more(is_es: bool = False) -> rx.Component:
    return rx.button(
        "see more projects" if not is_es else "Ver mas Proyectos", 
        on_click=rx.redirect('/projects' if not is_es else '/es-projects'),
        size='2',
    )