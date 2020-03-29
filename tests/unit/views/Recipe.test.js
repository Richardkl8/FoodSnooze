import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Recipe from '../../../src/views/Recipe.vue';
import stubs from '../stubs/stubs';

const responseGetRecipeById = {
    idMeal: '12',
    strMealThumb: 'image.jpg',
    strMeal: 'tuna',
    strCategory: 'fish',
    strIngredient1: 'tuna',
    strIngredient2: 'lemon',
    strIngredient3: 'salt',
    strMeasure1: '1',
    strMeasure2: '2',
    strMeasure3: ' ',
    strInstructions: 'Bake the tuna',
    strYoutube: 'https://www.youtube.com/watch?v=1ahpSTf_Pvk',
};

const responseGetRecipeByCategory = [
    {
        strMeal: 'tuna',
        strMealThumb: 'image.jpg',
        idMeal: '123',
    },
    {
        strMeal: 'beef',
        strMealThumb: 'image2.jpg',
        idMeal: '321',
    },
];

const provide = {
    apiService: {
        getRecipeById: jest.fn().mockResolvedValue(responseGetRecipeById),
        getRecipeByCategory: jest.fn().mockResolvedValue(responseGetRecipeByCategory),
    },
};

const mocks = {
    $route: {
        params: {
            id: '123',
        },
    },
    $router: {
        push: jest.fn(),
    },
};


describe('Recipe page', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Recipe, {
            provide,
            stubs,
            mocks,
        });
    });

    test('Should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should call getRecipeById, getRecipeByCategorySpy and setYoutubeEmbedUrl when component is created', async () => {
        const getRecipeByIdSpy = jest.spyOn(Recipe.methods, 'getRecipeById');
        const getRecipeByCategorySpy = jest.spyOn(Recipe.methods, 'getRecipeByCategory');
        const setYoutubeEmbedUrlSpy = jest.spyOn(Recipe.methods, 'setYoutubeEmbedUrl');
        const newWrapper = shallowMount(Recipe, {
            provide,
            stubs,
            mocks,
        });
        await flushPromises();

        expect(getRecipeByIdSpy).toHaveBeenCalledTimes(1);
        expect(newWrapper.vm.apiService.getRecipeById).toHaveBeenCalledWith('123');
        expect(getRecipeByCategorySpy).toHaveBeenCalledWith('fish');
        expect(setYoutubeEmbedUrlSpy).toHaveBeenCalledWith('https://www.youtube.com/watch?v=1ahpSTf_Pvk');
    });

    test('Should edit youtube string to embedded url when created', () => {
        expect(wrapper.vm.$data.videoUrl).toBe('https://www.youtube.com/embed/1ahpSTf_Pvk');
    });

    test('Should return a list of HTML stings with ingredients and measurements combined', () => {
        const result = [
            { ingredient: 'tuna', measure: '1' },
            { ingredient: 'lemon', measure: '2' },
            { ingredient: 'salt', measure: ' ' },
        ];
        expect(wrapper.vm.getIngredients()).toEqual(result);
    });

    test('Should not show video section when videoUrl is empty', async () => {
        expect(wrapper.find('#video').isVisible()).toBe(true);
        wrapper.vm.$data.videoUrl = '';
        await flushPromises();
        expect(wrapper.find('#video').exists()).toBe(false);
    });

    test('Should update route with mealId when input is different then current mealId in route', async () => {
        wrapper.vm.updateRouteWithMealId('123');
        expect(mocks.$router.push).not.toHaveBeenCalledWith('123');

        wrapper.vm.updateRouteWithMealId('321');
        expect(mocks.$router.push).toHaveBeenCalledWith('/recipe/321');
    });
});
