import { getSearchUrl, getRecipeInfoUrl } from '../';

jest.mock('../../constants/apis', () => ({
  API_KEY: 'API_KEY',
  FOOD_API: 'FOOD_API',
}));

describe('urls', () => {
  describe('getSearchUrl', () => {
    it('should generate the correct search URL', () => {
      const query = 'chicken';
      const expectedUrl = `FOOD_API/recipes/complexSearch?apiKey=API_KEY&query=chicken`;

      const result = getSearchUrl(query);
      expect(result).toBe(expectedUrl);
    });
  });

  describe('getRecipeInfoUrl', () => {
    it('should generate the correct recipe info URL', () => {
      const id = '123';
      const expectedUrl = `FOOD_API/recipes/123/information?apiKey=API_KEY`;
      const result = getRecipeInfoUrl(id);

      expect(result).toBe(expectedUrl);
    });
  });
});
