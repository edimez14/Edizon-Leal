import json


class Media:
    def __init__(self, email, cv, github, likedin):
        self.email = email
        self.cv = cv
        self.github = github
        self.likedin = likedin


class Technology:
    def __init__(self, icon, name):
        self.icon = icon
        self.name = name


class Info:
    def __init__(self, icon, title, subtitle, description, date="", certificate="", technologies=[], image="", url="", github=""):
        self.icon = icon
        self.title = title
        self.subtitle = subtitle
        self.description = description
        self.date = date
        self.certificate = certificate
        self.technologies = [Technology(**tech) for tech in technologies]
        self.image = image
        self.url = url
        self.github = github


class Service:
    def __init__(self, icon, title, description):
        self.icon = icon
        self.title = title
        self.description = description


class Data:
    def __init__(
        self,
            title,
            description,
            image,
            avatar,
            name,
            skill,
            location,
            media,
            about,
            technologies,
            experience,
            projects,
            training,
            services
    ):
        self.title = title
        self.description = description
        self.image = image
        self.avatar = avatar
        self.name = name
        self.skill = skill
        self.location = location
        self.media = Media(**media)
        self.about = about
        self.technologies = [Technology(**tech) for tech in technologies]
        self.experience = [Info(**info) for info in experience]
        self.projects = [Info(**info) for info in projects]
        self.training = [Info(**info) for info in training]
        self.services = [Service(**info) for info in services]




def load_data(language):
    # Define los archivos JSON según el idioma
    files = {
        "es": "assets/data/data_es.json",
        "en": "assets/data/data.json"
    }

    # Verifica si el idioma seleccionado es válido
    if language not in files:
        raise ValueError(f"El idioma '{language}' no es válido. Usa 'es' o 'en'.")

    # Carga los datos desde el archivo correspondiente
    with open(files[language]) as file:
        json_data = json.load(file)
        return Data(**json_data)


# Selecciona el idioma (puedes cambiar 'es' por 'en' según lo que necesites)
# selected_language = "es"
# try:
#     data = load_data(selected_language)
#     print(f"Datos cargados en {selected_language}: {data.title}")
# except ValueError as e:
#     print(e)

# with open("assets/data/data.json") as file:
#     json_data = json.load(file)

# data = Data(**json_data)
