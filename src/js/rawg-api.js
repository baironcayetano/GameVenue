const RAWG_KEY = import.meta.env.VITE_RAWG_KEY;

/** returns top game */
export const getTopGame = async () => {
  if(!RAWG_KEY){
    return null;
  }

  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${RAWG_KEY}&ordering=-added&page_size=1`,
      { method: "get" },
    );
    const data = await response.json();
    const topGame = data.results[0];
    return topGame;
  } catch (error) {
    console.error("Failed to load game information");
    return null;
  }
};

/** returns genres */

/** returns platforms */
export const getPlatforms = async () => {
  if(!RAWG_KEY){
    return null;
  }

  try {
    const response = await fetch(
      `https://api.rawg.io/api/platforms?key=${RAWG_KEY}`,
      { method: "get" },
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to load game information");
    return null;
  }

}