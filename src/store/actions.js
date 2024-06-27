import axios from "axios";

const API_URL =
	"https://api.elchocrud.pro/api/v1/ce51592ba280d60787ea12e460309ebf/todost";

export const getTodos = () => async (dispatch) => {
	try {
		const response = await axios.get(API_URL);
		dispatch({ type: "SET_TODOS", payload: response.data });
	} catch (error) {
		console.error("Error fetching todos:", error);
	}
};

export const addTodo = (todo) => async (dispatch) => {
	try {
		const response = await axios.post(API_URL, todo);
		dispatch({ type: "ADD_TODO", payload: response.data });
		dispatch(getTodos());
	} catch (error) {
		console.error("Error adding todo:", error);
	}
};

export const deleteTodo = async (id,dispatch)  => {
	try {
		await axios.delete(`${API_URL}/${id}`);
		dispatch({ type: "DELETE_TODO", payload: id });
		dispatch(getTodos())
	} catch (error) {
		console.error("Error deleting todo:", error);
	}
};
