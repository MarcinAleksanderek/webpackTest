import React from 'react';
import ToDoStyle from '../styles/ToDo.css';

const TodoList = props =>

	<div>
		{props.tdlist.map(oneToDo =>
			<div key={oneToDo.id} className={ToDoStyle.oneTodo}
				onClick={() => { props.removeTodo(oneToDo.id) }}>
				<div >{oneToDo.id}</div>
				<div>{oneToDo.text}</div>
			</div>
		)}
	</div> 

export default TodoList;
