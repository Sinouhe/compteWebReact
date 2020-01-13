import React from 'react';
import { LoginFormContainer } from '../pages/loginPage/LoginFormContainer';
import {shallow} from 'enzyme';
import json from 'enzyme-to-json';


describe('My Connected React-Redux Component', () => {
    let wrapper;

    beforeEach(() => {  
      wrapper = shallow(
        <LoginFormContainer />
      );
    });    

  it('should render with given state from Redux store', () => {
        expect(json(wrapper)).toMatchSnapshot();
    });

    /*
    it('should dispatch an action on submit form', () => {
      renderer.act(() => {
        wrapper.root.find( (el) => el.type == 'button' && el.props.id == 'loginFormSubmitButton').props.onClick();
      });
      expect(mockStoreInitialized.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(
        myAction({ payload: 'sample text' })
      );
    });
    */

   
  });