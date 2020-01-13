import React from 'react';
import { LoginFormContainerConnected } from '../pages/loginPage/LoginFormContainer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import renderer from 'react-test-renderer'; // ES6
const sagaMiddleware = createSagaMiddleware();

// Use the same middlewares you use with Redux's applyMiddleware
const mockStore = configureMockStore([sagaMiddleware]);
// Setup the entire state, not just the part Redux passes to the connected component.
const mockStoreInitialized = mockStore({ 
    users: {
      isLoggedIn: false
    }
}); 


describe('My Connected React-Redux Component', () => {
    let wrapper;

    beforeEach(() => {  
      wrapper = renderer.create( // enzyme
        <Provider store={mockStoreInitialized }>
          <LoginFormContainerConnected />
        </Provider>
      );
    });    

  it('should render with given state from Redux store', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
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