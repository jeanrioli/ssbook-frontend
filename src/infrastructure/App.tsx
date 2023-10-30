import React from 'react';
import { Router } from './Router';
import { BottomNavbar, Footer, Header } from '../components';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainTheme from '../themes/mainTheme';

function App() {
	return (
		<ThemeProvider theme={MainTheme}>
			<BrowserRouter>
				<Header />
				<Router />
				<Footer />
				<BottomNavbar />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
