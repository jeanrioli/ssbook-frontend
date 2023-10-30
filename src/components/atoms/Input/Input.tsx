import { FC } from 'react';
import * as Styled from './Input.styled';

interface InputProps {
	placeholder: string;
	icon?: JSX.Element;
}

export const Input: FC<InputProps> = ({ placeholder, icon }) => {
	return (
		<Styled.Container>
			<Styled.Input type='text' placeholder={placeholder} />
			{icon ? <Styled.Icon>{icon}</Styled.Icon> : null}
		</Styled.Container>
	);
};
