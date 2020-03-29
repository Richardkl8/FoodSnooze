import { shallowMount } from '@vue/test-utils';
import CustomFooter from '../../../../src/components/layout/CustomFooter.vue';
import stubs from '../../stubs/stubs';

describe('CustomFooter', () => {
    test('Should match snapshot', () => {
        const wrapper = shallowMount(CustomFooter, {
            stubs,
        });
        expect(wrapper).toMatchSnapshot();
    });
});
