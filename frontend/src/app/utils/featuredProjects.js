// data/featuredProjects.js

import featuredProjectsES from "/assets/data/featured_projects_es.json";
import featuredProjectsEN from "/assets/data/featured_projects.json";

/**
 * Featured projects data by language
 * @param {string} lang - "es" | "en"
 * @returns {Array}
 */
export const getFeaturedProjects = (lang = "es") => {
  switch (lang) {
    case "en":
      return featuredProjectsEN;
    case "es":
    default:
      return featuredProjectsES;
  }
};
