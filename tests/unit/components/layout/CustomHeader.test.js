import { shallowMount } from '@vue/test-utils';
import CustomHeader from '../../../../src/components/layout/CustomHeader.vue';

const mocks = {
    $router: {
        push: jest.fn(),
    },
    $route: {
        params: {},
    },
};

describe('CustomHeader', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('Should match snapshot', () => {
        const wrapper = shallowMount(CustomHeader, {
            stubs: [
                'custom-h1',
                'router-link',
            ],
        });
        expect(wrapper).toMatchSnapshot();
    });

    test('Should call \'goToSearchPage\' with query when user types in query and presses enter', () => {
        const wrapper = shallowMount(CustomHeader, {
            stubs: [
                'custom-h1',
                'router-link',
            ],
            mocks,
        });
        const spy = jest.spyOn(wrapper.vm, 'goToSearchPage');
        const searchBar = wrapper.find('input');

        searchBar.setValue('beef');
        searchBar.trigger('keydown.enter');

        expect(mocks.$router.push).toHaveBeenCalledWith('/search/beef');
        expect(spy).toHaveBeenCalledWith('beef');
    });

    test('Should reset search bar input when keydown.enter', () => {
        const wrapper = shallowMount(CustomHeader, {
            stubs: [
                'custom-h1',
                'router-link',
            ],
            mocks,
        });
        const searchBar = wrapper.find('input');

        searchBar.setValue('beef');
        expect(wrapper.vm.$data.query).toBe('beef');

        searchBar.trigger('keydown.enter');
        expect(wrapper.vm.$data.query).toBe('');
    });

    test('Should not go to page when search bar query is same as url query parameter', () => {
        const wrapper = shallowMount(CustomHeader, {
            stubs: [
                'custom-h1',
                'router-link',
            ],
            mocks: {
                ...mocks,
                $route: {
                    params: {
                        query: 'beef',
                    },
                },
            },
        });
        const searchBar = wrapper.find('input');

        searchBar.setValue('beef');
        searchBar.trigger('keydown.enter');

        expect(mocks.$router.push).not.toHaveBeenCalled();
    });
});
