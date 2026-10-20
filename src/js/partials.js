import { getGenres, getPlatforms } from "./rawg-api";
import {
  appendTemplate,
  loadDialogFuntionality,
  loadHeaderFunctionality,
  loadTemplate,
  renderWithTemplate,
} from "./utils";

/** Loads side menu */
const includeSideMenu = async () => {
  const sideElement = document.querySelector("#side-menu");
  const sideMenuTemplate = await loadTemplate("../partials/sidemenu.html");

  if (sideMenuTemplate) {
    renderWithTemplate(sideMenuTemplate, sideElement);
    return;
  }

  //error
  renderWithTemplate("<span>Failed loading menu</span>", sideElement);
};

/** Loads header menu */
const includeMobileMenu = async () => {
  const mobileMenuElement = document.querySelector("#menu-mobile");
  const mobileMenuTemplate = await loadTemplate("../partials/mobilemenu.html");

  if (mobileMenuElement) {
    renderWithTemplate(mobileMenuTemplate, mobileMenuElement);
    return;
  }

  //error
  renderWithTemplate("<span>Failed loading menu</span>", mobileMenuElement);
};

//Load navigation menus
export const includeNavigation = async () => {
  await includeSideMenu();
  await includeMobileMenu();
};

export const includeHeader = async () => {
  const header = document.querySelector("header");
  const headerTemplate = await loadTemplate("../partials/header.html");

  if (headerTemplate) {
    renderWithTemplate(headerTemplate, header);
    await includeNavigation();
    await includeSearchDialog();
    loadDialogFuntionality();
    loadHeaderFunctionality();
    return;
  }

  //error
  renderWithTemplate("<span>Failed loading header</span>", header);
};

/** Includes the footer partials dinamically */
export const includeFooter = async () => {
  const footer = document.querySelector("footer");
  const footerTemplate = await loadTemplate("../partials/footer.html");

  if (footerTemplate) {
    renderWithTemplate(footerTemplate, footer);
    return;
  }

  //error
  renderWithTemplate("<p>Failed loading footer</p>", footer);
};

export const includeSearchDialog = async () => {
  const main = document.querySelector("main");
  const dialogElement = document.createElement("dialog");
  const dialogTemplate = await loadTemplate("../partials/search-dialog.html");

  //error
  if (!dialogTemplate) {
    return;
  }

  renderWithTemplate(dialogTemplate, dialogElement);
  appendTemplate(dialogElement, main);
};

export const includePlatforms = async () => {
  const main = document.querySelector(".page-content");
  const platformSections = document.createElement("div");
  platformSections.classList.add("platforms-secition");
  platformSections.id = "platforms";

  const template = await loadTemplate("../partials/platforms.html");
  if (!template) {
    return;
  }

  renderWithTemplate(template, platformSections);
  appendTemplate(platformSections, main);
};

/** Inserts a template in the HTML and then uses it to render the genres
 * @param {Array<any>} data
 * @param {HTMLElement} parentElement
 */
const useGenresTemplate = (data, parentElement) => {
  const parent = parentElement.querySelector("#genres-cards");
  const template = parentElement.querySelector("#genres-template");
  if (template && parent) {
    data.forEach((genre) => {
      //clones the template
      //after copying the elements, inserts the new node
      //to the parent element
      const clone = template.content.cloneNode(true);
      const a = clone.querySelector("a");
      a.href = `/genres/?name=${genre.slug}`;
      a.textContent = genre.name;
      parent.appendChild(clone);
    });
  }
};

export const includeGenres = async () => {
  const main = document.querySelector(".page-content");
  const genreSection = document.createElement("div");
  genreSection.classList.add("genre-section");

  const genres = await getGenres();
  const GENRES_LIMIT = 15;

  if (genres.length > GENRES_LIMIT) {
    genres.splice(GENRES_LIMIT);
  }

  const template = await loadTemplate("../partials/genres.html");
  if (!template) {
    return;
  }

  renderWithTemplate(template, genreSection, genres, useGenresTemplate);
  appendTemplate(genreSection, main);
};
