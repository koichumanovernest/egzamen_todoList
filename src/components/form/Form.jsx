
import  { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../card/Card";
import scss from "./Form.module.scss";
import { addTodo } from "../../store/actions";

const Form = () => {
	const dispatch = useDispatch();
	const [todoText, setTodoText] = useState("");

	const handleAdd = () => {
		if (todoText === "") {
			alert("Кандай е😘");
		} else {
			dispatch(addTodo({ name: todoText }));
			setTodoText("");
		}
	};

	return (
		<div className={scss.content}>
			<div className="container">
				<h1>TodoList React-Redux</h1>
				<div className={scss.form}>
					<input
						className={scss.ini}
						type="text"
						placeholder="Text🥷"
						value={todoText}
						onChange={(e) => setTodoText(e.target.value)}
					/>
					<button onClick={handleAdd}>Add</button>
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Form;
