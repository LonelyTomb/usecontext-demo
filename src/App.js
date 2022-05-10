import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Students from "./Students";
import AddStudents from "./AddStudents";
import EditStudent from "./EditStudent";
import {Provider} from './StudentContext'
import './App.css'

export default function App({props}) {
	return (
		<Provider>
			<BrowserRouter>
				<div>
					<nav>
						<NavLink to={'/'}>Students</NavLink>
						<NavLink to={'/add'}>Add Student</NavLink>
					</nav>
				</div>
				<Routes>
					<Route path="/" element={<Students/>}/>
					<Route path="/add" element={<AddStudents/>}/>
					<Route path="/edit/:id" element={<EditStudent/>}/>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}
