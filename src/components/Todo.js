import React from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
	/* border: 1px solid black; */
	text-decoration: ${pr => pr.completed ? "line-through" : "none"};
	&:hover {
		cursor: pointer;
		text-decoration: ${pr => pr.completed ? "line-through underline" : "underline"};
	}
`;

const Todo = props => {
	const { item } = props;
	
	const handleClick = (evt) => {
		props.handleToggleItem(props.item.id);
	};
	
	return (
		<TodoContainer name={item.id} completed={item.completed} onClick={handleClick}>
			<li>{item.task}</li>
		</TodoContainer>
	);
};

export default Todo;