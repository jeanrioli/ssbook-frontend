import { FC } from 'react';
import * as Styled from './Description.styled';

import parse from 'html-react-parser';

interface DescriptionProps {
	description: string;
}

export const Description: FC<DescriptionProps> = ({ description }) => {
	return <Styled.Container>{parse(`<span>${description?.replace(/\n/g, '<br />')}</span>`)}</Styled.Container>;
};
