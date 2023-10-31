import { FC } from 'react';
import * as Styled from './BottomNavigation.styled';

import { NavbarButton } from '../../atoms';
import { IconAdd, IconFave, IconHome, IconSearch } from '../../../icons';

export const BottomNavigation: FC = () => {
	const buttons = [
		{ label: 'Início', icon: <IconHome /> },
		{ label: 'Adicionar', icon: <IconAdd /> },
		{ label: 'Buscar', icon: <IconSearch /> },
		{ label: 'Favoritos', icon: <IconFave /> },
	];

	return (
		<Styled.Container>
			<Styled.Navigation>
				{buttons.map((button, i) => (
					<NavbarButton
						variant='vertical'
						label={button.label}
						icon={button.icon}
						isSelected={button.label === 'Início'}
						key={i}
					/>
				))}
			</Styled.Navigation>
		</Styled.Container>
	);
};
