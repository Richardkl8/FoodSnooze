import { shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(App, {
            stubs: [
                'router-view',
            ],
        });
    });

    test('Should match snapShot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show (stubbed) \'custom-header\', \'router-view\' \'custom-footer\' when mounted', () => {
        expect(wrapper.html()).toContain(
            '<custom-header-stub></custom-header-stub>\n'
            + '  <router-view-stub></router-view-stub>\n'
            + '  <custom-footer-stub></custom-footer-stub>',
            );
    });
});
