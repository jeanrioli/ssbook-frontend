import { Routes, Route } from 'react-router-dom';
import { Home } from '../views';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='path' element={<>path</>} />
		</Routes>
	);
};
