import React from 'react';
import { Router } from './Router';
import { BottomNavbar, Footer, Header } from '../components';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Router />
			<Footer />
			<BottomNavbar />
		</BrowserRouter>
	);
}

export default App;
