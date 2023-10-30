import { useState, useEffect } from 'react';

export const useIsMobile = (threshold: number) => {
	const [isMobile, setIsMobile] = useState<boolean>();

	const onResize = () => {
		const _isMobile = window.innerWidth < threshold;

		if (_isMobile !== isMobile) {
			setIsMobile(_isMobile);
		}
	};

	useEffect(() => {
		onResize();

		window.addEventListener('resize', onResize);

		return () => window.removeEventListener('resize', onResize);
	}, []);

	return isMobile;
};
