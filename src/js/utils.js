/**Renders with the given template and data
 * @param {string}template
 * @param {HTMLElement} parentElement
 * @param {any} data
 * @param {Function} callback
 */
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data, parentElement);
  }
}

/**
 * Appends the template to it's parent element
 * @param {HTMLElement} template - template
 * @param {HTMLElement} parentElement  - parent Element
 * @returns {void}
 */
export function appendTemplate(template, parentElement) {
  parentElement.appendChild(template);
}

/** Retrieves the template from the given path
 * @param {string} path
 * @returns {string | null}
 */
export async function loadTemplate(path) {
  try {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  } catch (error) {
    return null;
  }
}

/**
 * Actives an element by using toggle in each element
 * @param {HTMLElement[]} elements
 */
export function activateElements(elements) {
  elements.forEach((element) => element.classList.toggle("active"));
}

/** Detects commands
 * @param {KeyboardEvent} e - event
 * @param {string} key - keyword button
 * @param {Funciton} callback - callback
 */
function Command(e, key, callback) {
  if ((e.ctrlKey && e.key === key) || (e.altKey && e.key === key)) {
    callback();
  }
}

/** Loads the functionality of the navigation bar */
export function loadHeaderFunctionality() {
  //app content
  const appContent = document.querySelector("main");
  //side menu
  const sideMenuBtn = document.getElementById("side-menu-button");
  const sideMenu = document.getElementById("side-menu");

  if (sideMenu && sideMenuBtn) {
    sideMenuBtn.addEventListener("click", () => {
      activateElements([appContent, sideMenu, sideMenuBtn]);
    });
    window.addEventListener("keyup", (e) => {
      //activate/desactive when pressing the windows button on windows/linux
      //and it's equivalent in MacOs
      Command(e, "Meta", () =>
        activateElements([appContent, sideMenu, sideMenuBtn]),
      );
    });
  }

  //nav menu for small devices
  const navMenuBtn = document.getElementById("menu-button");
  const navMenu = document.getElementById("menu-mobile");

  if (navMenuBtn && navMenu) {
    navMenuBtn.addEventListener("click", () => {
      activateElements([navMenu, navMenuBtn]);
    });
  }

  //search button
  const searchBtn = document.querySelector("#search-button");
  const searchDialog = document.querySelector("dialog");

  if (searchBtn && searchDialog) {
    //add keyword shortcuts
    window.addEventListener("keyup", (e) => {
      Command(e, "s", () => {
        searchDialog.toggleAttribute("open");
      });
    });

    searchBtn.addEventListener("click", () => {
      searchDialog.setAttribute("open", true);
    });
  }
}

export function loadDialogFuntionality() {
  const closeBtn = document.querySelector("#close-dialog");
  const dialog = document.querySelector("dialog");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      dialog.removeAttribute("open");
    });
  }
}
