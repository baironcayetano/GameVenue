import { loadHero } from "./hero";
import {
  includeFooter,
  includeGenres,
  includeHeader,
  includePlatforms,
} from "./partials";
import { getTopGame } from "./rawg-api";

async function initPage() {
  includeHeader();
  includeFooter();

  const topGame = await getTopGame();
  loadHero(topGame);
  includeGenres();
  includePlatforms();
}

initPage();
