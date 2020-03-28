import { shallowMount } from '@vue/test-utils';
import Home from '../../../src/views/Home.vue';
import stubs from '../stubs/stubs';

const responseRandomRecipes = [
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
        getRandomRecipes: jest.fn().mockResolvedValue(responseRandomRecipes),
    },
};


describe('Home page', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Home, {
            provide,
            stubs: stubs.general,
        });
    });

    test('Should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should call getRandomRecipes when component is created', async () => {
        const spy = jest.spyOn(Home.methods, 'getRandomRecipes');
        shallowMount(Home, {
            provide,
            stubs: stubs.general,
        });
        expect(spy).toHaveBeenCalled();
    });

    test('Should populate the recipes array when getRandomRecipes is called', async () => {
        expect(wrapper.vm.$data.recipes).toBe(responseRandomRecipes);
    });

    test('Should call getRandomRecipes when snooze button is clicked', async () => {
        const spy = jest.spyOn(wrapper.vm, 'getRandomRecipes');
        const snoozeButton = wrapper.find('[testId="snooze-button-home"]');
        snoozeButton.trigger('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
