import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoContainer from './TodoContainer';

configure({ adapter: new Adapter() });

describe("Normal Test",()=>{
	it("Test Start",()=>{
		expect(2+2).toEqual(4);
	})
})
describe("TodoContainer Test",()=> {
	// it("Test by using shallow", ()=> {
	// 	const component = shallow(<TodoContainer/>);
	// });
	// it("Test by using render", ()=> {
	// 	const component = render(<TodoContainer/>);
	// });
	// it("Test by using mount", ()=> {
	// 	const component = mount(<TodoContainer/>);
	// 	const textFile = component.find('.newDiv').text();
	// 	expect(textFile).toEqual('This is the inside div')
	// });
	// it("Test the click event",()=>{
	// 	const component = shallow(<TodoContainer/>);
	// 	const button = component.find('button');
		// button.simulate('click');
		// button.simulate('click');
		// button.simulate('click');
		// const showCount = component.find('.showCout').text();
		// expect(showCount).toEqual("No of count is : 3");
	// })
});
