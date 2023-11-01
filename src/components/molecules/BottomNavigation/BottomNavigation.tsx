import { FC } from 'react';
import * as Styled from './BottomNavigation.styled';

import { ButtonNavbar } from '../../atoms';
import { IconAdd, IconFave, IconHome, IconSearch } from '../../../icons';
import { useNavigate } from 'react-router-dom';

export const BottomNavigation: FC = () => {
	const navigate = useNavigate();

	const buttons = [
		{ label: 'Início', icon: <IconHome />, action: () => navigate('/') },
		{ label: 'Adicionar', icon: <IconAdd />, action: () => {} },
		{ label: 'Buscar', icon: <IconSearch />, action: () => {} },
		{ label: 'Favoritos', icon: <IconFave />, action: () => {} },
	];

	return (
		<Styled.Container>
			<Styled.Navigation>
				{buttons.map((button, i) => (
					<ButtonNavbar
						variant='vertical'
						label={button.label}
						icon={button.icon}
						isSelected={button.label === 'Início'}
						onClick={button.action}
						key={i}
					/>
				))}
			</Styled.Navigation>
		</Styled.Container>
	);
};
