import React from 'react';
import LoginFormContainer from '../pages/loginPage/LoginFormContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);


describe('My Connected React-Redux Component', () => {
    let store;
    let component;

    beforeEach(() => {
      store = mockStore({
        isLoggedIn: false
      });

      component = renderer.create(
        <Provider store={store}>
          <LoginFormContainer />
        </Provider>
      );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on button click', () => {
    });
  });

/*

describe('test connection user', function() {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LoginForm/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it(('Render le contenair sans erreur'), () => {
        
        const div = document.createElement('div');
        ReactDom.render(<LoginForm/>, div);
        console.log(div.innerHTML);
       
              //console.log(wrapper.html());
       expect(wrapper.html()).toContain('Log in');
    });

});
*/