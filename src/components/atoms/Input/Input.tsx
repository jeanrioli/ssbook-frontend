import { FC, useState } from 'react';
import * as Styled from './Input.styled';

interface InputProps {
	placeholder: string;
	icon?: JSX.Element;
}

export const Input: FC<InputProps> = ({ placeholder, icon }) => {
	const [value, setValue] = useState<string>('');

	return (
		<Styled.Container>
			<Styled.Input type='text' placeholder={placeholder} value={value} onChange={(ev) => setValue(ev.target.value)} />
			{icon ? <Styled.Icon>{icon}</Styled.Icon> : null}
		</Styled.Container>
	);
};
