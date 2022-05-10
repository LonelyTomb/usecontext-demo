import React, {useState, useEffect} from 'react'
import {nanoid} from "nanoid";

const StudentForm = ({callback, student}) => {
	const defaultData = {
		id: '',
		firstName: "",
		lastName: "",
		gender: "",
		skills: [],
		age: 0
	}
	const [form, setForm] = useState({
		...defaultData
	});
	const skills = ['html', 'css', 'javascript']
	const genders = ['male', 'female', 'others']

	const updateForm = (e) => {
		const {name, value} = e.target;
		setForm({...form, [name]: value});
	};
	const updateCheckbox = (e) => {
		const {value} = e.target;
		let items = [...form.skills]
		if (items.includes(value)) {
			items = items.filter(x => x !== value)
		} else {
			items.push(value)
		}
		setForm({...form, skills: [...items]})
	}
	const submitForm = async (e) => {
		e.preventDefault();
		const payload = {...form}
		if (!student) {
			payload.id = nanoid()
		}
		await callback(payload)
		setForm({...defaultData})
	};

	useEffect(() => {
		if (student && student.id) {
			setForm({...student})
		}
	}, [student])

	return (
		<div>
			<form>
				<div className={'form-group'}>
					<label htmlFor="firstName">First name</label>
					<input
						name="firstName"
						value={form.firstName}
						id="firstName"
						onChange={updateForm}
					/>
				</div>
				<div className={'form-group'}>
					<label htmlFor="lastName">Last name</label>
					<input name="lastName" value={form.lastName} onChange={updateForm} id="lastName"
					/>
				</div>
				<div className={'form-group'}>
					<p>Gender</p>
					<div className={'flex'}>
						{
							genders.map(gender => (
								<div key={gender} className={'flex align-center'}>
									<label htmlFor={gender} className={'text-capitalize'}>{gender}</label>
									<input
										checked={form.gender === gender}
										id={gender}
										type="radio"
										name="gender"
										value={gender}
										onChange={updateForm}
									/>
								</div>
							))
						}
					</div>
				</div>
				<div className={'form-group'}>
					<p>Skills</p>
					<div className={'flex'}>
						{skills.map(skill => (
							<div key={skill} className={'flex align-center'}>
								<label htmlFor={skill} className={'text-capitalize'}>{skill}</label>
								<input
									checked={form.skills.includes(skill)}
									id={skill}
									type="checkbox"
									name="skills"
									value={skill}
									onChange={updateCheckbox}
								/>
							</div>
						))}

					</div>
				</div>
				<div className={'form-group'}>
					<label htmlFor="age">Age</label>
					<input name="age" value={form.age} onChange={updateForm}/>
				</div>
				<div className={'form-group'}>
					<button type="submit" onClick={submitForm}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default StudentForm
