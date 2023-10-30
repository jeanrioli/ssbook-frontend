import { FC, Children, ReactNode } from 'react';
import * as Styled from './CardList.styled';

interface CardListProps {
	columns: number;
	children: ReactNode;
}

export const CardList: FC<CardListProps> = ({ columns, children }) => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.List $columns={columns}>
					{Children.map(children, (child, i) => (
						<Styled.Item key={i}>{child}</Styled.Item>
					))}
				</Styled.List>
			</Styled.Content>
		</Styled.Container>
	);
};
