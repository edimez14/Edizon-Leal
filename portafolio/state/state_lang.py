import reflex as rx

class LangState(rx.State):
    language: str = "en"

    def set_language(self, lang: str):
        """Cambia el idioma y lo guarda en localStorage."""
        self.language = lang
        return rx.LocalStorage.set("language", lang)

    def load_language(self):
        """Carga el idioma guardado en localStorage."""
        return rx.LocalStorage.get("language", rx.set(self, "language"))