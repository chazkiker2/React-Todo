import React from "react";

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: "",
		};
	}

	handleChange = evt => {
		this.setState({
			inputValue: evt.target.value,
		})
	};

	handleSubmit = evt => {
		evt.preventDefault();
		this.props.handleAddItem(this.state.inputValue);
		this.setState({
			inputValue: "",
		})
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="item-name" type="text" value={this.state.inputValue} onChange={this.handleChange} />
				<button>Add Todo</button>
			</form>
		);
	}
};

export default TodoForm;