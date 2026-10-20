const RAWG_KEY = import.meta.env.VITE_RAWG_KEY;
//API SOURCE URL
const RAWG_API = "https://api.rawg.io/api";

//ENDPOINT SECTIONS
const GAMES_ENDPOINT = `${RAWG_API}/games?key=${RAWG_KEY}`;
const PlATFORM_ENDPOINT = `${RAWG_API}/platforms?key=${RAWG_KEY}`;
const GENRES_ENDPOINT = `${RAWG_API}/genres?key=${RAWG_KEY}`;

/** This is a helper function to retreive information from the RAWG API
 * @param {string} endpoint */
//Use this function to avoid repeting try/catch code
//reducing 8 lines of code in each function that uses it
const getData = async (endpoint) => {
  try {
    const response = await fetch(endpoint, { method: "get" });
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to retreive information from API");
    return null;
  }
};

/** returns top game */
export const getTopGame = async () => {
  const endpoint = `${GAMES_ENDPOINT}&ordering=-added&page_size=1`;
  const data = await getData(endpoint);

  //top game
  return data[0] ? data[0] : null;
};

/** returns genres */
export const getGenres = async () => {
  const data = await getData(GENRES_ENDPOINT);
  return data;
};

/** returns platforms */
export const getPlatforms = async () => {
  const data = await getData(PlATFORM_ENDPOINT);
  return data;
};
