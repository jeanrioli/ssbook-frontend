import { Author } from './Author';
import { Category } from './Category';

export interface Book {
	id: number;
	name: string;
	author: Author;
	cover: string;
	description: string;
	isFavorite: boolean;
	category: Category;
}
