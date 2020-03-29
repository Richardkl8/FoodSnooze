import getApiService from '../../../src/services/ApiService';
import endPoints from '../../../src/services/support/endPoints';

describe('ApiService', () => {
    let apiService;
    beforeEach(() => {
        apiService = getApiService(endPoints, process.env.VUE_APP_API_BASEURL);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('Should set endpoints according to (test) env file', () => {
        expect(apiService.endPoints.getRandomRecipe).toBe('/recipe');
    });

    test('Should set the base url according to (test) env file', async () => {
        expect(apiService.https.defaults.baseURL).toBe('http://www.testurl');
    });

    test('Should call onError method when api call fails', async () => {
        apiService.https.get = jest.fn().mockRejectedValue('error message');
        const spy = jest.spyOn(apiService, 'onError');

        await apiService.getRandomRecipes().catch(() => {});
        await apiService.getRecipeById().catch(() => {});
        await apiService.getRecipeByCategory().catch(() => {});
        await apiService.getRecipeByQuery().catch(() => {});

        expect(spy).toHaveBeenCalledWith('error message');
        expect(spy).toHaveBeenCalledTimes(4);
    });

    test('Should return array with combined responses from 3 calls when getRandomRecipes succeeds', async () => {
        apiService.https.get = jest.fn().mockResolvedValue({ data: { meals: [{ test: 1 }] } });

        const result = [{ test: 1 }, { test: 1 }, { test: 1 }];
        return apiService.getRandomRecipes().then((data) => expect(data).toEqual(result));
    });

    test('Should return one object when getRecipeById succeeds', async () => {
        apiService.https.get = jest.fn().mockResolvedValue({ data: { meals: [{ test: 1 }] } });

        const result = { test: 1 };
        return apiService.getRecipeById('123').then((data) => expect(data).toEqual(result));
    });

    test('Should return array of objects when getRecipeByCategory succeeds', async () => {
        apiService.https.get = jest.fn().mockResolvedValue({ data: { meals: [{ test: 1 }, { test: 2 }] } });

        const result = [{ test: 1 }, { test: 2 }];
        return apiService.getRecipeByCategory('fish').then((data) => expect(data).toEqual(result));
    });

    test('Should return array of objects when getRecipeByQuery succeeds', async () => {
        apiService.https.get = jest.fn().mockResolvedValue({ data: { meals: [{ test: 1 }, { test: 2 }] } });

        const result = [{ test: 1 }, { test: 2 }];
        return apiService.getRecipeByQuery('beef').then((data) => expect(data).toEqual(result));
    });
});
