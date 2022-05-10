import React, {useReducer} from "react";

const initialState = {students: {}};

export const Context = React.createContext(initialState);

export const Provider = ({children}) => {
	const reducer = (state, action) => {
		const {type, payload} = action
		switch (type) {
			case 'ADD_STUDENT':
				return {...state, students: {...state.students, [payload.id]: payload}}
			case 'EDIT_STUDENT':
				return {...state, students: {...state.students, [payload.id]: payload}}
			default:
				return state
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const addStudent = (payload) => {
		dispatch({type: 'ADD_STUDENT', payload})
	}
	const editStudent = (payload) => {
		dispatch({type: 'EDIT_STUDENT', payload})
	}

	const values = {students: state.students, addStudent, editStudent}
	return <Context.Provider value={values}>
		{children}
	</Context.Provider>
};

