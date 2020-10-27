import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// import "./App.css";
import "./dist/App.css";
import styled from "styled-components";
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
const AppWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	max-width: 100%;
	width: 100%;
	background: ${pr => pr.theme.khaki};
	height: 100vh;
`;
const Container = styled.div`
	padding-top: 5vh;
	width: 90%;
	height: 100%;
	border: 1px solid black;
	text-align: center;
	font-family: sans-serif;
	font-size: 1.3rem;
	/* background: ${pr => pr.theme.secondary}; */
	background-color: ${pr => pr.theme.umber};
	h2 {
		font-size: 2rem;
		padding: 1rem;
		font-weight: 700;

		color: ${pr => pr.theme.almond};
	}
`;
const Button = styled.button`
	width: 15rem;
	height: 30px;
	/* border: 0.1% solid gunmetal; */
	border: 0;
	background-color: ${pr => pr.theme.almond};
	margin-top: 10px;
`;

const todoItems = [
	{
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false
	}
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoItems: todoItems,
		};
	}

	handleToggleItem = (itemId) => {
		this.setState({
			todoItems: this.state.todoItems.map(item => {
				if (item.id === itemId) {
					return {
						...item, completed: !item.completed
					}
				} else {
					return item;
				}
			})
		})
	};

	handleAddItem = (itemName) => {
		console.log(itemName);
		const lastId = this.state.todoItems.length > 0 ? this.state.todoItems[this.state.todoItems.length - 1].id : 1528817084358;
		const nextId = lastId + 1;
		this.setState({
			todoItems: [...this.state.todoItems, {
				task: itemName,
				id: nextId,
				completed: false,
			}]
		})
	};

	handleClear = () => {
		this.setState({
			todoItems: this.state.todoItems.filter(item => {
				return !item.completed;
			})
		})
	};

	render() {
		return (
			<AppWrapper>
				<Container>
					<h2>Basic To-Do App</h2>
					<TodoForm handleAddItem={this.handleAddItem} />
					<Button onClick={this.handleClear}>Clear Complete</Button>
					<TodoList handleToggleItem={this.handleToggleItem} handleClear={this.handleClear} items={this.state.todoItems} />
				</Container>
			</AppWrapper>
		);
	}
}

export default App;
