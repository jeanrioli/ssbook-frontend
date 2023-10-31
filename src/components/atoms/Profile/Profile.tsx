import { FC } from 'react';
import * as Styled from './Profile.styled';

interface ProfileProps {
	username: string;
	avatar: string;
}

export const Profile: FC<ProfileProps> = ({ username, avatar }) => {
	return (
		<Styled.Container>
			<Styled.Photo src={avatar} alt='user picture' />
			<Styled.Username>{username}</Styled.Username>
		</Styled.Container>
	);
};
