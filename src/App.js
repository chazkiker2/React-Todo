import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
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
		const lastId = this.state.todoItems[this.state.todoItems.length - 1].id;
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
      <div>
        <h2>Welcome to your Todo App!</h2>
				<TodoList handleToggleItem={this.handleToggleItem} handleClear={this.handleClear} items={this.state.todoItems} />
				<TodoForm handleAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;
