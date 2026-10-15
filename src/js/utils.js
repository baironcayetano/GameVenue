/**
 * Actives an element by using toggle in each element
 * @param {HTMLElement[]} elements
 */
const activateElements = (elements) => {
  elements.forEach((element) => element.classList.toggle("active"));
};

/** Loads the functionality of the navigation bar */
export const loadHeaderFunctionality = () => {
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
      if (e.key === "OS" || e.key === "Meta") {
        activateElements([appContent, sideMenu, sideMenuBtn]);
      }
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
};
