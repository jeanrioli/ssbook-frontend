import { FC, useLayoutEffect, useState } from 'react';
import * as Styled from './Header.styled';

import { HeaderInteraction } from '../../organisms';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsMobile } from '../../../utils';

export const Header: FC = () => {
	const isMobile = useIsMobile(1280);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [hideHeader, setHideHeader] = useState<boolean>();

	useLayoutEffect(() => {
		if (isMobile && pathname.includes('/book/')) {
			setHideHeader(true);
		} else {
			setHideHeader(false);
		}
	}, [isMobile, pathname]);

	if (hideHeader) return null;

	return (
		<Styled.Container>
			<Styled.Position>
				<Styled.Content>
					<Styled.Logo src='/logo/ssbook-color-logo.svg' alt='ssbook logo' onClick={() => navigate('/')} />
					<HeaderInteraction />
				</Styled.Content>
			</Styled.Position>
		</Styled.Container>
	);
};
