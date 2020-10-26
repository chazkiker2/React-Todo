import React from "react";
import styled from "styled-components";

const TodoContainer = styled.li`
	&:root {
		--clr-primary: rgb(54, 112, 199);
		--clr-light: #f4f4f4;
		--clr-dark: #333;
		--clr-warning: rgb(99, 36, 36);
	}
	/* border: 1px solid black; */
	list-style: none;
	overflow: hidden;
	height: 2rem;
	width: 100%;
	position: relative;
	margin-bottom: 1.25rem;
	&::after {
		content: "";
		position: absolute;
		right: 0;
		left: 0;
		bottom: -0.5rem;
		height: 1px;
		background: #FFF;
		opacity: 0.1;
	}
	[type=checkbox] {
		opacity: 0;
		position: absolute;
	}
	&:hover .custom-checkbox, [type=checkbox]:focus + label .custom-checkbox {
		transform: scale(1.2);
	}
	[type=checkbox]:checked + label .custom-checkbox {
		/* background: var(--clr-primary); */
		background: ${pr => pr.checked ? "blue" : "white"};
		border-color: var(--clr-primary);
		box-shadow: inset 0 0 0px 2px ${pr => pr.theme.checked ? "blue" : "white"};
	}
	[type=checkbox]:checked + label {
		opacity: 0.5;
	}
	label::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		left: 1.5rem;
		top: 50%;
		height: 3px;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 150ms ease-in-out;
	}
	transition: transform 150ms ease-in-out;
	[type="checkbox"]:checked + label::after {
	transform: scaleX(1);
	transform-origin: left;
	}
	label {
		float: left;
		display: flex-inline;
		justify-content: flex-start;
		/* align-items: flex-start; */
		position: relative;
		cursor: pointer;
		transition: transform 300ms ease-in-out;
		span.custom-checkbox {
			--size: 0.75rem;
			display: inline-block;
			width: var(--size);
			height: var(--size);
			margin: 0px 7px 0px 2px;
			cursor: pointer;
			border: 2px solid currentColor;
			border-radius: 50%;
			transform: scale(1);
			transition: transform 300ms ease-in-out;
			background-color: ${pr => pr.checked ? "blue" : "transparent"};
		}
	}
`;

const Todo = props => {
	const { item } = props;

	const handleClick = (evt) => {
		props.handleToggleItem(props.item.id);
	};

	return (
		<TodoContainer completed={item.completed}>
			<input type="checkbox" checked={item.completed} onChange={handleClick} id={item.id} />
			<label htmlFor={item.id}>
				<span className="custom-checkbox" checked={item.completed}></span>
				{item.task}
			</label>

		</TodoContainer>
	);
};

export default Todo;