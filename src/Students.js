import React, {useContext} from "react";
import {Context} from './StudentContext'
import {NavLink} from 'react-router-dom'
const Students = () => {
	const {students} = useContext(Context)

	return <div className={'flex'}>
		{Object.values(students).map(student => (<div>
			<div className={'student-card'}>
				<p>ID: {student.id}</p>
				<p>Name: {student.firstName} {student.lastName}</p>
				<p>Age: {student.age}</p>
				<p>Gender: {student.gender}</p>
				<p>Skills: {student.skills.join(',')}</p>
				<NavLink to={`/edit/${student.id}`}>Edit Student</NavLink>
			</div>
		</div>))}
	</div>;
};

export default Students;
