import React from 'react';
// import ReactDom from 'react-dom'
class TodoContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			count: 0
		}
	}
	increment(){
		let newCount = this.state.count;
		this.setState({count:++newCount})
	}
	render(){
		return(
			<div>
				<br/><br/>
				<input type="text"/>
				<div className="newDiv">This is the inside div</div>
				<br/><br/>
				<div className="showCout">No of count is : {this.state.count}</div>
				<button onClick={()=>this.increment()}>Click</button>
			</div>
			)
	}
}

export default TodoContainer;
