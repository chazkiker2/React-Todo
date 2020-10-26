import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";


class TodoList extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{
						this.props.items.map(it => {
							return <Todo key={it.id} item={it} handleToggleItem={this.props.handleToggleItem} />
						})
					}
				</ul>
				<button onClick={this.props.handleClear}>Clear Complete</button>
			</div>
		);
	}
}

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
