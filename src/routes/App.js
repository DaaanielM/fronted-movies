import React from 'react';
import Nav from '../components/menu/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Cartelera from '../views/ViewCartelera';
import Footer from '../views/ViewFooter';
import Search from '../components/search/Search';
function App() {
	return (
		<Router>
			<Nav />
			{/* <Search /> */}
			<Routes>
				<Route path='/Cartelera' element={<Home />} />
				<Route path='/Proximamente' element='proximamente xd' />
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
