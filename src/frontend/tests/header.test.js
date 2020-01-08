import React from 'react';
import Header from '../container/header';
import { shallow, mount } from  'enzyme';
import RootTest from './root-test';
import { incrementActionCount } from '../actions';
import { INCREMENT_ACTION_COUNT, SET_AUTHENTIFICATION } from '../actions/action-types';
import AuthentificationReducer from '../reducers/reducer-auth'

describe("Test TodoApp fonctionnement", function() {
    it('render du composant connecté sans erreur', () => {
       const wrapper = shallow(
           <RootTest>
               <Header />
           </RootTest>
       )
    })

    it('test que le boutton connexion passe bien de connexion à deconnexion', () => {
        // div permet d'avoir accès au élément du dom
        const wrapper = mount(
            <RootTest>
                <Header />
            </RootTest>
        )

        expect(wrapper.find("a").at(2).text()).toEqual("Connexion");
        wrapper.find("a").at(2).simulate("click");
        expect(wrapper.find("a").at(2).text()).toEqual("Déconnexion");

    })

    it('test le reducer authentification sans action type', () => {
        const action = incrementActionCount();
        expect(action.type).toEqual(INCREMENT_ACTION_COUNT)    
    })

    it('test le reducer authentification sans action type', () => {
        const initlState = {
            isLoggedIn: false
        }
        expect(AuthentificationReducer(initlState, {}).isLoggedIn).toEqual(false);
    })

    it('test le reducer authentification sans action type', () => {
        const action = {
            type: SET_AUTHENTIFICATION,
            payload: true
        }
        const initlState = {
            isLoggedIn: false
        }
        expect(AuthentificationReducer(initlState, action).isLoggedIn).toEqual(true);
    })

});