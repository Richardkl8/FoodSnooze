import { shallowMount } from '@vue/test-utils';
import CustomButton from '../../../src/components/CustomButton.vue';

describe('CustomButton', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CustomButton, {
            propsData: {
                text: 'test text',
            },
        });
    });

    test('Should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should have text prop and render prop as text', () => {
        expect(wrapper.props('text')).toBe('test text');
        expect(wrapper.text()).toContain('test text');
    });
});
