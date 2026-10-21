/**
 * Renders the given game in a hero element.
 * To accomplish this, it uses the hero template,
 * copies the node and updates the image, title and link of the element
 * and then adds it to the hero container.
 */
export const loadHero = (game) => {
  const hero = document.querySelector("#hero");
  const heroTemplate = document.querySelector("#hero-template");
  const clone = heroTemplate.content.cloneNode(true);
  const [img, h2, a] = clone.querySelectorAll(".hero-image, h2, .link-button");
  img.src = game.background_image;
  img.alt = game.name;
  h2.textContent = game.name;
  a.href = `/game/${game.id}`;

  hero.appendChild(clone);
};
