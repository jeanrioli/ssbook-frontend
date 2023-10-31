import { gql, useQuery } from '@apollo/client';

interface UserPicture {
	userPicture: string;
}

export const useUserPicture = (): UserPicture => {
	const GET_USER_PICTURE = gql`
		query FetchPicture {
			userPicture
		}
	`;

	const { data } = useQuery(GET_USER_PICTURE);

	return data;
};
