import { Router } from './Router';
import { BottomNavigation, Footer, Header } from '../components';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainTheme from '../themes/mainTheme';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
	const client = new ApolloClient({
		uri: 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
		cache: new InMemoryCache(),
	});

	return (
		<ThemeProvider theme={MainTheme}>
			<BrowserRouter>
				<ApolloProvider client={client}>
					<Header />
					<Router />
					<Footer />
					<BottomNavigation />
				</ApolloProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
