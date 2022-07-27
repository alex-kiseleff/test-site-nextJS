import styled from 'styled-components';
import {
	Article,
	Description,
	Title,
} from '../../components/NewsBlockComponent/NewsBlockComponent.styles';

const Section = styled.section`
	max-width: 100%;
	background: ${({ theme }) => theme.colors.bg.news};
	padding: 1rem;
	color: ${({ theme }) => theme.colors.font.news};
	pointer-events: none;
	flex-grow: 1;
`;

const Container = styled.div`
	max-width: ${({ theme }) => theme.sizes.screen.maximal};
	margin: 0 auto;

	& > ${Article} {
		${Title} {
			font-size: 1.5rem;
		}

		${Description} {
			font-size: 1rem;
			overflow: visible;
			line-height: 1.5;
			-webkit-line-clamp: 1000000;
		}
	}
`;

export { Section, Container };
