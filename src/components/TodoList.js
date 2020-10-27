import React from "react";
import Todo from "./Todo";
// import TodoForm from "./TodoForm";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 40%;
	padding: 2rem 0;
`;
const ListContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: flex-start;
`;
const StyledList = styled.ul`
	padding: 0;
`;

class TodoList extends React.Component {
	render() {
		return (
			<Container>
				<ListContainer>
					<StyledList>
						{
							this.props.items.map(item => {
								return <Todo key={item.id} item={item} handleToggleItem={this.props.handleToggleItem} />
							})
						}
					</StyledList>
				</ListContainer>
			</Container>
		);
	}
}

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
