import { FC } from 'react';
import * as Styled from './Profile.styled';

interface ProfileProps {}

export const Profile: FC<ProfileProps> = ({}) => {
	return (
		<Styled.Container>
			<Styled.Photo
				src='https://cdn.rickriordan.com/wp-content/uploads/2020/10/11224708/rick.jpg'
				alt='user profile photo'
			/>
			<Styled.Username>{'Jucicreide'}</Styled.Username>
		</Styled.Container>
	);
};
