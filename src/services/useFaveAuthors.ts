import { gql, useQuery } from '@apollo/client';
import { Author } from '../entities';

interface FaveAuthors {
	favoriteAuthors: Array<Pick<Author, 'name' | 'picture' | 'booksCount'>>;
}

export const useFaveAuthors = (): FaveAuthors => {
	const GET_FAVE_AUTHORS = gql`
		query FetchFaveAuthors {
			favoriteAuthors {
				name
				booksCount
				picture
			}
		}
	`;

	const { data } = useQuery(GET_FAVE_AUTHORS);

	return data;
};
