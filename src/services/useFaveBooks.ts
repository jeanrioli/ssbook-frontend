import { gql, useQuery } from '@apollo/client';
import { Author, Book } from '../entities';

interface FaveBooks {
	favoriteBooks: Array<
		Pick<Book, 'id' | 'name' | 'cover'> & {
			author: Pick<Author, 'name'>;
		}
	>;
}

export const useFaveBooks = (): FaveBooks => {
	const FETCH_FAVE_BOOKS = gql`
		query FetchFaveBooks {
			favoriteBooks {
				id
				name
				author {
					name
				}
				cover
			}
		}
	`;
	const { data } = useQuery(FETCH_FAVE_BOOKS);

	return data;
};
