import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoContainer from './TodoContainer';
import TodoListItem from './TodoListItem';
import { spy } from 'sinon'

configure({ adapter: new Adapter() });

describe("Test Render in TodoListItem",()=>{
	it('renders TodoContainer without crashing', () => {
		const div = document.createElement('div');
		ReactDom.render(<TodoContainer/>, div);
		ReactDom.unmountComponentAtNode(div);
	});
})

describe("Test The TodoContainer component", () => {
    const wrapper = shallow(<TodoContainer/>)
    const inputComponent = wrapper.find('.inputData');
    it("Test the no of input text field", () => {
        expect(inputComponent.length).toEqual(1);
    });
    it("Test all elements", ()=>{
    	expect(wrapper.containsAllMatchingElements([<input/>,<TodoListItem/>])).toEqual(true)
    })
});

describe("Test the initial state ",()=>{
	const wrapper = shallow(<TodoContainer/>);
	it("Initial State", ()=>{
		expect(wrapper.state('todoList')).toEqual([]);
	});
});

describe("Test the functions",()=>{
	it("getInputValue function",()=>{
		const wrapper = shallow(<TodoContainer/>);
		const inputComponent = wrapper.find(<input/>);
		const event = {
			target: {
				value: "text"
			}
		}
		wrapper.instance().getInputValue(event);
		expect(wrapper.state('todoList')).toEqual([]);
	});
});

describe("Test the Props for TodoContainer",()=>{
	const wrapper = shallow(<TodoContainer/>)
	const TodoList = wrapper.find('TodoListItem');
	it("Checking the todoListStatus props",()=>{
		const getStatus = wrapper.instance().getStatus;
		expect(TodoList.prop("todoListStatus")).toEqual(getStatus);		
	})
	it("Checking the todoData props",()=>{
		expect(TodoList.prop("todoData")).toEqual([]);	
	})
	it("Checking the checkDeletedItem props",()=>{
		const getDeletedItem = wrapper.instance().getDeletedItem;
		expect(TodoList.prop("checkDeletedItem")).toEqual(getDeletedItem);	
	})
})

describe("Test The TodoContainer key eventsTodoList.prop(todoData)", () => {
    const wrapper = mount(<TodoContainer/>); 
	it("Test the input key event", () => {
		const inputComponent = wrapper.find('.inputData');
		inputComponent.simulate("keyDown",{keyCode:13, target:{value:"sample task"}});
        expect(wrapper.state('todoList')[0].text).toEqual("sample task");
    })
	it("Test the key event on checkbox", ()=>{
		const checkbox = wrapper.find('input[type="checkbox"]');
		checkbox.simulate('change',{currentTarget:{ checked: false } });
		expect(checkbox.length).toEqual(1)
		expect(wrapper.state('todoList')[0].status).toEqual(false);
	})
});
