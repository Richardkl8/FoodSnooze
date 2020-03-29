import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import RecipeCard from '../../../src/components/RecipeCard.vue';
import stubs from '../stubs/stubs';

const recipe = {
    strMealThumb: 'image.jpg',
    strMeal: 'Tuna',
    strCategory: 'Fish',
};

describe('RecipeCard', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(RecipeCard, {
            propsData: {
                recipe,
                showCategory: true,
            },
            stubs,
        });
    });

    test('Should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should have recipe and showCategory prop', () => {
        expect(wrapper.props('recipe')).toBe(recipe);
        expect(wrapper.props('showCategory')).toBe(true);

        const title = wrapper.find('[testId="recipe-title"]');
        const category = wrapper.find('[testId="recipe-category"]');

        expect(title.text()).toBe('Tuna');
        expect(category.text()).toBe('Fish');
    });

    test('Should not show category when \'showCategory\' prop is false', async () => {
        const category = wrapper.find('[testId="recipe-category"]');
        wrapper.setProps({ showCategory: false });
        await flushPromises();
        expect(category.exists()).toBe(false);
    });
});
