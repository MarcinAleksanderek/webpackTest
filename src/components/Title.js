import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	render() {
		return (
				<h1>{this.props.title} {this.props.numOfToDos}</h1>
		);
	}
}

export default Title;