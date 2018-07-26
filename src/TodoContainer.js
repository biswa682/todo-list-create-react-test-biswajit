import React from 'react';
import TodoListItem from './TodoListItem'
// import PropType from 'prop-types'
 class TodoContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			todoList: []
		}
	}

	getInputValue = (event) =>{
		if(event.keyCode === 13){
			const inputData = {
				_id: new Date().getTime(),
				status: false,
				text: event.target.value 
			}
			this.setState({todoList: this.state.todoList.concat(inputData)});
			event.target.value = ""
		}

	}

	getStatus = (event) =>{
		let elements = this.state.todoList;
		if(event.target.checked){
			for(let i of elements){
				if(i._id === Number(event.target.parentNode.id)){
					i.status = true;
				}
			}
		}else{
			for(let i of elements){
				if(i._id === Number(event.target.parentNode.id)){
					i.status = false;
				}
			}
		}
		this.setState(()=>({
			todoList: elements
		}));
	}

	getDeletedItem = (event) =>{
		let elements = this.state.todoList;
		let newElement = elements.filter(function(item){
			return item._id !== Number(event.target.parentNode.id);
		});
		this.setState(()=>({
			todoList: newElement
		}));
	}
	render(){
		return(
			<div>
				<input type="text" name="inputData" className="inputData" onKeyDown={(event)=>this.getInputValue(event)}/>
				<TodoListItem todoData={this.state.todoList} todoListStatus={this.getStatus}
				checkDeletedItem={this.getDeletedItem}
				/>
			</div>
		)
	}
}

// TodoContainer.propTypes={
// 	todoData: PropType.array.isRequired
// }
export default TodoContainer;
// 