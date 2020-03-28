import { shallowMount } from '@vue/test-utils';
import CustomFooter from '../../../../src/components/layout/CustomFooter.vue';

describe('CustomFooter', () => {
    test('Should match snapshot', () => {
        const wrapper = shallowMount(CustomFooter, {
            stubs: [
                'custom-h3',
                'router-link',
            ],
        });
        expect(wrapper).toMatchSnapshot();
    });
});
