import React from 'react';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	render() {
		const ToDos = this.props.tdlist.map((item, i) => <li key={i}>{item}</li>)
		return (
			<ul>{ToDos}</ul>
		);
	}
}

export default ToDoList;