import React from 'react'
import { shallow, mount } from 'enzyme'
import Timer from './Timer'

describe('Timer Component Renders', () => {
    let container = shallow(<Timer />);

    it('Should render a div', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    });

    it("Render Timer Initial Dispaly With 0 min & 0 sec.", () => {
        expect(container.text()).toMatch(/00 : 00/)
    });

    it("Render Timer Start Button", () => {
        expect(container.text()).toMatch(/start/i)
    });

    it("Render Timer Stop Button", () => {
        expect(container.text()).toMatch(/stop/i)
    });

    it("Render Timer Reset Button", () => {
        expect(container.text()).toMatch(/Reset/i)
    });
})