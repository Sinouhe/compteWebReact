import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todo-app';
import { shallow } from  'enzyme';

describe("Test TodoApp fonctionnement", function() {

    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<TodoApp/>)
    })

    afterEach(() => {
        wrapper.unmount();
    })

    it('render le composant TodoApp san erreur', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp/>, div);
        // console.log(div.innerHTML);
    });

    it('Contient la chaine "Nouvelle tâche"', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp/>, div);
        expect(div.innerHTML).toContain("Nouvelle tâche");
    });

    it('render le composant TodoApp sans erreur avec shallow', () => {
        expect(wrapper.html()).toContain("Nouvelle tâche");
    });

    it('Verifie qu\'il y a deux class CSS "row"', ()=> {
        expect(wrapper.find('.row').length).toEqual(2);
    })

    it('Verifie qu\'il y a un ID "addButton"', ()=> {
        expect(wrapper.find('#addButton').length).toEqual(1);
    })

    it('change la valeur de l\'input', () => {
        wrapper.find('input').simulate("change", {
            target: { value: 'YO'}            
        })
        expect(wrapper.find('input').prop('value')).toEqual("YO");
    })

    it('Saisie d\'une valeur dans l\'input', () => {
        wrapper.find('input').simulate("change", {
            target: { value: 'YO'}            
        })
        expect(wrapper.find('input').prop('value')).toEqual("YO");
    })

    it('Saisie d\'une valeur dans l\'input, clique sur le bouton et vérifie que le texte est bien dans la liste', () => {
        wrapper.find('input').simulate("change", {
            target: { value: 'YO'}            
        })
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.list-group-item').text()).toContain('YO');
    })

});