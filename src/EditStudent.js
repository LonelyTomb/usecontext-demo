import React, {useContext} from "react";
import {Context} from './StudentContext'
import StudentForm from "./StudentForm";
import {useParams, useNavigate} from 'react-router-dom';

const AddStudents = () => {
	const {editStudent, students} = useContext(Context)
	const {id} = useParams()
	const navigate = useNavigate()

	const student = Object.values(students).find(item=> item.id === id)
	console.log(id)
	const submitForm = async (payload) => {
		await editStudent(payload)
		navigate('/')
	};
	return (
		<div>
			<h1>Edit Student</h1>
			<StudentForm callback={submitForm} student={student}></StudentForm>
		</div>
	);
};

export default AddStudents;
