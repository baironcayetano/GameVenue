/** loads Hero Container */
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
}