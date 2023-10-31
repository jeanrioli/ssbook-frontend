import { Routes, Route } from 'react-router-dom';
import { Book, Home } from '../pages';
import { FC } from 'react';

export const Router: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/book/:bookId' element={<Book />} />
		</Routes>
	);
};
