import { FC } from 'react';
import * as Styled from './HeaderInteraction.styled';
import { IconAdd, IconFave, IconSearch } from '../../../icons';
import { Input, NavbarButton, Profile } from '../../atoms';

export const HeaderInteraction: FC = () => {
	const buttons = [
		{ label: 'Adicionar', icon: <IconAdd /> },
		{ label: 'Favoritos', icon: <IconFave /> },
	];

	return (
		<Styled.Container>
			<Styled.DesktopInteraction>
				<div style={{ flex: 1 }}>
					<Input placeholder='Busque um livro' icon={<IconSearch />} />
				</div>
				{buttons.map((button, i) => (
					<NavbarButton variant='horizontal' label={button.label} icon={button.icon} isSelected={true} key={i} />
				))}
				<Styled.Separator />
			</Styled.DesktopInteraction>
			<Profile />
		</Styled.Container>
	);
};
