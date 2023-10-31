import { gql, useQuery } from '@apollo/client';
import { Author, Book } from '../entities';

interface AllBooks {
	allBooks: Array<
		Pick<Book, 'id' | 'name' | 'cover' | 'category'> & {
			author: Pick<Author, 'name'>;
		}
	>;
}

export const useAllBooks = (): AllBooks => {
	const GET_ALL_BOOKS = gql`
		query FetchAllBooks {
			allBooks {
				id
				name
				author {
					name
				}
				cover
				category
			}
		}
	`;

	const { data } = useQuery(GET_ALL_BOOKS);

	return data;
};
