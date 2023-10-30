import { Routes, Route } from 'react-router-dom';
import { Book, Home } from '../views';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/book/:bookId' element={<Book />} />
		</Routes>
	);
};
