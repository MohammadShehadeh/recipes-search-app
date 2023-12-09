import { API_KEY, FOOD_API } from '../constants';

/**
 * Generates the search URL based on the provided query.
 *
 * @param {string} query The search query.
 * @returns {string} The search URL.
 */
export const getSearchUrl = (query: string): string =>
  `${FOOD_API}/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`;

/**
 * Generates the recipe information URL based on the provided recipe ID.
 *
 * @param {string} id The recipe ID.
 * @returns {string} The recipe information URL.
 */
export const getRecipeInfoUrl = (id: string): string =>
  `${FOOD_API}/recipes/${id}/information?apiKey=${API_KEY}`;
