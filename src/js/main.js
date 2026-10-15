import { loadHero } from "./hero";
import { includeFooter, includeGenres, includeHeader, includePlatforms } from "./partials";
import { getTopGame } from "./rawg-api";

includeHeader();
includeFooter();

const topGame = await getTopGame();
loadHero(topGame);

includeGenres();
includePlatforms();

