import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Search from '../../../src/views/Search.vue';
import stubs from '../stubs/stubs';


const responseGetRecipeByQuery = [
    {
        idMeal: '12',
        strMealThumb: 'image.jpg',
        strMeal: 'tuna',
        strCategory: 'fish',
    },
    {
        idMeal: '12',
        strMealThumb: 'image.jpg',
        strMeal: 'tuna',
        strCategory: 'fish',
    },
    {
        idMeal: '12',
        strMealThumb: 'image.jpg',
        strMeal: 'tuna',
        strCategory: 'fish',
    },
];

const provide = {
    apiService: {
        getRecipeByQuery: jest.fn().mockResolvedValue(responseGetRecipeByQuery),
    },
};

const mocks = {
    $route: {
        params: {
            query: 'fish',
        },
        path: '/search/fish',
    },
};


describe('Search page', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Search, {
            provide,
            stubs: stubs.general,
            mocks,
        });
    });

    test('Should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should call getRecipeByQuery with route params when component is created', () => {
        expect(wrapper.vm.apiService.getRecipeByQuery).toHaveBeenCalledWith('fish');
    });

    test('Should show error when search query returns empty array', async () => {
       expect(wrapper.find('[testId="recipe-card-search"]').isVisible()).toBe(true);
       wrapper.setData({ foundRecipes: [] });
       await flushPromises();
       expect(wrapper.find('[testId="recipe-card-search"]').exists()).toBe(false);
    });

    test('Should set foundRecipes to an empty array when response is null', async () => {
        provide.apiService.getRecipeByQuery.mockResolvedValue(null);
        wrapper = shallowMount(Search, {
            provide,
            stubs: stubs.general,
            mocks,
        });
        wrapper.vm.apiService.getRecipeByQuery();
        await flushPromises();
        expect(wrapper.vm.$data.foundRecipes).toEqual([]);
    });
});
