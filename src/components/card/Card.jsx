import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin2Fill } from "react-icons/ri";
import scss from "./Card.module.scss";
import { getTodos, deleteTodo } from "../../store/actions";

const Card = () => {
	const todos = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	return (
		<div className={scss.content}>
			<div className="container">
				<div className={scss.cards}>
					{todos.map((item) => (
						<div key={item._id} className={scss.maap}>
							<p>{item.name}</p>
							<span onClick={() => handleDelete(item._id)}>
								<RiDeleteBin2Fill />
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
