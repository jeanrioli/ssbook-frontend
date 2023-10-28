import { FC } from 'react';
import * as Styled from './BottomNavbar.styled';
import { NavbarButton } from '../NavbarButton';
import { IconAdd, IconFave, IconHome, IconSearch } from '../../icons';

export const BottomNavbar: FC = () => {
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
					<NavbarButton label={button.label} icon={button.icon} isSelected={button.label === 'Início'} />
				))}
			</Styled.Navigation>
		</Styled.Container>
	);
};
