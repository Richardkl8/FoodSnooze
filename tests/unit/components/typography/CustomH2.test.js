import { shallowMount } from '@vue/test-utils';
import CustomH2 from '../../../../src/components/typography/CustomH2.vue';

describe('CustomH2', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CustomH2, {
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
