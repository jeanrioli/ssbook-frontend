import { FC, useEffect, useState } from 'react';
import * as Styled from './HeaderInteraction.styled';
import { IconAdd, IconFave, IconSearch } from '../../../icons';
import { Input, NavbarButton, Profile } from '../../atoms';
import { gql, useQuery } from '@apollo/client';

const buttons = [
	{ label: 'Adicionar', icon: <IconAdd /> },
	{ label: 'Favoritos', icon: <IconFave /> },
];

export const HeaderInteraction: FC = () => {
	const TESTE = gql`
		query FetchPicture {
			userPicture
		}
	`;

	const { data } = useQuery(TESTE);

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
			<Profile username='Neytiri' avatar={data?.userPicture} />
		</Styled.Container>
	);
};
