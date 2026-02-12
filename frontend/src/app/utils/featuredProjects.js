// featuredProjects.js

export class FeaturedTechnology {
  constructor({ icon, name }) {
    this.icon = icon;
    this.name = name;
  }
}

export class FeaturedProject {
  constructor({
    icon,
    title,
    subtitle,
    overview,
    problem,
    solution,
    my_role,
    key_features = [],
    business_value,
    learnings,
    technologies = [],
    image = "",
    url = "",
    github = "",
  }) {
    this.icon = icon;
    this.title = title;
    this.subtitle = subtitle;
    this.overview = overview;
    this.problem = problem;
    this.solution = solution;
    this.my_role = my_role;
    this.key_features = key_features;
    this.business_value = business_value;
    this.learnings = learnings;
    this.technologies = technologies.map(
      (tech) => new FeaturedTechnology(tech),
    );
    this.image = image;
    this.url = url;
    this.github = github;
  }
}

export async function loadFeaturedProjects(language = "en") {
  const validLanguages = ["es", "en"];
  if (!validLanguages.includes(language)) {
    throw new Error(`Invalid language: ${language}. Use 'es' or 'en'.`);
  }

  const filePath = `/assets/data/${
    language === "es" ? "featured_projects_es" : "featured_projects"
  }.json`;

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const jsonData = await response.json();
    return jsonData.map((project) => new FeaturedProject(project));
  } catch (error) {
    console.error("Error loading featured projects:", error);
    throw error;
  }
}
