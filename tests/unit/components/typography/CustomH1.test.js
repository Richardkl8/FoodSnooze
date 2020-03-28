import { shallowMount } from '@vue/test-utils';
import CustomH1 from '../../../../src/components/typography/CustomH1.vue';

describe('CustomH1', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CustomH1, {
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
