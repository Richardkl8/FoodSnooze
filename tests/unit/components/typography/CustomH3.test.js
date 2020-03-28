import { shallowMount } from '@vue/test-utils';
import CustomH3 from '../../../../src/components/typography/CustomH3.vue';

describe('CustomH3', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CustomH3, {
            slots: {
                default: 'Test text',
            },
        });
    });

    test('Should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show text when text is injected in slot', () => {
        expect(wrapper.text()).toMatchSnapshot('Test text');
    });
});
