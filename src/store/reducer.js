const initialState = [];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_TODOS":
			return action.payload;
		case "ADD_TODO":
			return [...state, action.payload];
		case "DELETE_TODO":
			return state.filter((todo) => todo.id !== action.payload);

		default:
			return state;
	}
};
