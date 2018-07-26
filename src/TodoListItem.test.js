import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoContainer from './TodoContainer';
import TodoListItem from './TodoListItem';
import { spy } from 'sinon';

configure({ adapter: new Adapter() });

xit('renders TodoListItem without crashing', () => {
	const div = document.createElement('div');
	ReactDom.render(<TodoListItem/>, div);
	ReactDom.unmountComponentAtNode(div);
});
it("no of element",()=>{
	const wrapper = shallow(<TodoListItem/>)
})