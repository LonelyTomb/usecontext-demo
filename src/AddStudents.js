import React, {useContext} from "react";
import {Context} from './StudentContext'
import StudentForm from "./StudentForm";
const AddStudents = () => {
	const {addStudent} = useContext(Context)

	const submitForm = async (payload) => {
		await addStudent(payload)
	};
	return (
		<div>
			<h1>Add Students</h1>
		<StudentForm callback={submitForm}></StudentForm>
		</div>
	);
};

export default AddStudents;
