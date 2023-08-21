/* =====Imports===== */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import 'boxicons';
/* =====Imports===== */

/* =====Route===== */
import Principal from './cp/Principal';
/* =====Route===== */

/* =====App===== */
export default function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route exact path='/' element={<Principal />} />
				</Routes>
			</Router>
		</React.Fragment>
	)
}
/* =====App===== */