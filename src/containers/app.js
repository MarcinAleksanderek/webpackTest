import React from 'react';
import style from './App.css';
import Title from '../components/Title'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [1,2,3,4]
		};
	}

	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({ data });
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({ data: remainder });
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title title={'ToDo App:'} numOfToDos={this.state.data.length} />
			</div>
		);
	}
}

export default App;