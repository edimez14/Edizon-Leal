// data.js

export class Media {
  constructor({ email, cv, github, likedin }) {
    this.email = email;
    this.cv = cv;
    this.github = github;
    this.likedin = likedin;
  }
}

export class Technology {
  constructor({ icon, name }) {
    this.icon = icon;
    this.name = name;
  }

  toDict() {
    return {
      icon: this.icon,
      name: this.name,
    };
  }
}

export class Info {
  constructor({
    icon,
    title,
    subtitle,
    description,
    date = "",
    certificate = "",
    technologies = [],
    image = "",
    url = "",
    github = "",
  }) {
    this.icon = icon;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.date = date;
    this.certificate = certificate;
    this.technologies = technologies.map((tech) => new Technology(tech));
    this.image = image;
    this.url = url;
    this.github = github;
  }
}

export class Service {
  constructor({ icon, title, description }) {
    this.icon = icon;
    this.title = title;
    this.description = description;
  }
}

export class Data {
  constructor({
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
    services,
  }) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.avatar = avatar;
    this.name = name;
    this.skill = skill;
    this.location = location;
    this.media = new Media(media);
    this.about = about;
    this.technologies = technologies.map((tech) => new Technology(tech));
    this.experience = experience.map((info) => new Info(info));
    this.projects = projects.map((info) => new Info(info));
    this.training = training.map((info) => new Info(info));
    this.services = services.map((service) => new Service(service));
  }
}

export async function loadData(language = "en") {
  const validLanguages = ["es", "en"];
  if (!validLanguages.includes(language)) {
    throw new Error(`Invalid language: ${language}. Use 'es' or 'en'.`);
  }

  const filePath = `/assets/data/${language === "es" ? "data_es" : "data"}.json`;

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    return new Data(jsonData);
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
}
