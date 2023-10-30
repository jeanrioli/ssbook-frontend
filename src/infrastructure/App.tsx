import { Router } from './Router';
import { BottomNavigation, Footer, Header } from '../components';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainTheme from '../themes/mainTheme';
import { useIsMobile } from '../utils';
import { useLayoutEffect, useState } from 'react';

function App() {
	const isMobile = useIsMobile(1280);

	const [hideHeader, setHideHeader] = useState<boolean>();

	useLayoutEffect(() => {
		if (isMobile && window.location.pathname.includes('/book/')) {
			setHideHeader(true);
		} else {
			setHideHeader(false);
		}
	}, [isMobile]);

	return (
		<ThemeProvider theme={MainTheme}>
			<BrowserRouter>
				{hideHeader ? null : <Header />}
				<Router />
				<Footer />
				<BottomNavigation />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
