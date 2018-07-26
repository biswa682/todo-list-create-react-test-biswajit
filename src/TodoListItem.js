import React from 'react';
import PropTypes from 'prop-types'
var checkList = {
  'textDecoration': 'line-through'
}
var unCheckList = {
  'textDecoration': 'none'
}

class TodoListItem extends React.Component{
	render(){
		return
		// const listItems = this.props.todoData.map(todo => {
		// 	var toggleStatus = todo.status ? checkList : unCheckList;
		// 	return(<li style={toggleStatus} key={todo._id} id={todo._id}>
		// 		<input type="checkbox" onChange={this.props.todoListStatus}/>{todo.text}
		// 		<button onClick={this.props.checkDeletedItem}>X</button>
		// 		</li>);
		// });
		return
			(
				this.props.todoData.map(todo => {
				var toggleStatus = todo.status ? checkList : unCheckList;
				<li style={toggleStatus} key={todo._id} id={todo._id}>
				<input type="checkbox" onChange={this.props.todoListStatus}/>{todo.text}
				<button onClick={this.props.checkDeletedItem}>X</button>
				</li>
				})
			)
	}
}

TodoListItem.propTypes = {
  todoData: React.PropTypes.array.isRequired
};
export default TodoListItem;
