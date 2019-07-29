import React from 'react';
import {configure, shallow} from 'enzyme';
import Button from './Button';
import Adapter from "enzyme-adapter-react-16/build";

configure({adapter: new Adapter()});

describe('Button', () => {
    it('should be defined', () => {
        expect(Button).toBeDefined();
    });
    it('should render correctly', () => {
        const wrapper = shallow(
            <Button label={`button test`} fill={true} active={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
