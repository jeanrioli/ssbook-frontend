import { gql, useQuery } from '@apollo/client';
import { Author, Book } from '../entities';

export const useBook = (
	id: string
): { book: Pick<Book, 'name' | 'description' | 'cover'> & { author: Pick<Author, 'name'> } } => {
	const GET_BOOK_INFO = gql`
		query FetchAllBooks {
			book(id: ${id}) {
			    name,
                author {
                    name
                }
                description
                cover
			}
		}
	`;

	const { data } = useQuery(GET_BOOK_INFO);

	return data;
};
