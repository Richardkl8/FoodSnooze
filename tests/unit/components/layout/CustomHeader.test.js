import { shallowMount } from '@vue/test-utils';
import CustomHeader from '../../../../src/components/layout/CustomHeader.vue';
import stubs from '../../stubs/stubs';

const mocks = {
    $router: {
        push: jest.fn(),
    },
    $route: {
        params: {},
    },
};

describe('CustomHeader', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CustomHeader, {
            mocks,
            stubs: stubs.general,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should call \'goToSearchPage\' with query when user types in query and presses enter', () => {
        const spy = jest.spyOn(wrapper.vm, 'goToSearchPage');
        const searchBar = wrapper.find('input');

        searchBar.setValue('beef');
        searchBar.trigger('keydown.enter');

        expect(mocks.$router.push).toHaveBeenCalledWith('/search/beef');
        expect(spy).toHaveBeenCalledWith('beef');
    });

    test('Should reset search bar input when keydown.enter', () => {
        const searchBar = wrapper.find('input');

        searchBar.setValue('beef');
        expect(wrapper.vm.$data.query).toBe('beef');

        searchBar.trigger('keydown.enter');
        expect(wrapper.vm.$data.query).toBe('');
    });

    test('Should not go to page when search bar query is same as url query parameter', () => {
        const newWrapper = shallowMount(CustomHeader, {
            stubs: stubs.general,
            mocks: {
                ...mocks,
                $route: {
                    params: {
                        query: 'beef',
                    },
                },
            },
        });
        const searchBar = newWrapper.find('input');

        searchBar.setValue('beef');
        searchBar.trigger('keydown.enter');

        expect(mocks.$router.push).not.toHaveBeenCalled();
    });
});
