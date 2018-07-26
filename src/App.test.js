import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import adapter from 'enzyme-adapter-react-16'
import App from './App';
// import TodoContainer from './TodoContainer'

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// xdescribe("Todolist Test", function(){
// 	it("test", function(){
// 		expect(2+2).toEqual(4)
// 	})
// })