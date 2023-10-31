import { FC } from 'react';
import * as Styled from './Profile.styled';

interface ProfileProps {
	username: string;
	photo: string;
}

export const Profile: FC<ProfileProps> = ({ username, photo }) => {
	return (
		<Styled.Container>
			<Styled.Photo src={photo} alt='user profile photo' />
			<Styled.Username>{username}</Styled.Username>
		</Styled.Container>
	);
};
