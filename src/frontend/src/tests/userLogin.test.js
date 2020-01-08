import React from 'react';
import ReactDom from 'react-dom';
import LoginFormContainer from '../pages/loginPage';
import { shallow } from 'enzyme';

describe('test connection user'), function() {

    it('Render le contenair sans erreur'), () => {
        const div = document.createElement('div');
        ReactDom.render(<LoginFormContainer/>, div);
    };

};