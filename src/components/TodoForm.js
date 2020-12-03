import React from "react";
import styled from "styled-components";

const Form = styled.form`
	width: 15rem;
	margin: 0 auto;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
`;
const Input = styled.input`
	width: 65%;
	height: 30px;
	display: inline-block;
	background-color: ${pr => pr.theme.almond};
	border: 0;
	/* border: 0.1% ${pr => pr.theme.gunmetal};
	border-right: 0; */
	
`;
const Button = styled.button`
	width: 35%;
	height: 30px;
	display: inline-block;
	background-color: ${pr => pr.theme.khaki};
	color: ${pr => pr.theme.richBlackF};
	border: 0;
	/* border: 0.1% ${pr => pr.theme.gunmetal};
	border-left: 0; */
	
`;

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
			<Form onSubmit={this.handleSubmit}>
				<Input name="item-name" type="text" value={this.state.inputValue} onChange={this.handleChange} />
				<Button>Add Todo</Button>
			</Form>
		);
	}
};

export default TodoForm;