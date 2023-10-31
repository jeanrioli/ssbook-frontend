import { Router } from './Router';
import { BottomNavigation, Footer, Header } from '../components';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainTheme from '../themes/mainTheme';
import { useIsMobile } from '../utils';
import { useLayoutEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
	const isMobile = useIsMobile(1280);
	const [hideHeader, setHideHeader] = useState<boolean>();
	const client = new ApolloClient({
		uri: 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
		cache: new InMemoryCache(),
	});

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
				<ApolloProvider client={client}>
					{hideHeader ? null : <Header />}
					<Router />
					<Footer />
					<BottomNavigation />
				</ApolloProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
