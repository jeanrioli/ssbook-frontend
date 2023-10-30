import { FC } from 'react';
import * as Styled from './Book.styled';

import { useParams } from 'react-router-dom';
import { IconArrow } from '../../icons/IconArrow';
import { IconDots } from '../../icons/IconDots';

export const Book: FC = () => {
	const { bookId } = useParams();

	return (
		<Styled.Container>
			<Styled.TopSection>
				<Styled.Return>
					<IconArrow />
					<IconDots />
				</Styled.Return>
			</Styled.TopSection>
			<Styled.BottomSection>
				<Styled.Content>{bookId}</Styled.Content>
			</Styled.BottomSection>
		</Styled.Container>
	);
};
