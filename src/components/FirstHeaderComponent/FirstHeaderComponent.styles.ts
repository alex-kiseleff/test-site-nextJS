import styled from 'styled-components';
import bg_png from '/public/images/header/background/png/dollars.png';
import bg_webp from '/public/images/header/background/webp/dollars.webp';

const Header = styled.header`
	background: ${({ theme }) => theme.colors.bg.firstHeader};
	background-image: image-set(url(${bg_webp.src}) 1x, url(${bg_png.src}) 1x);
	background-size: cover;
	box-shadow: inset 0 0 15vw 0.5vw ${({ theme }) => theme.colors.chadows.firstHeader.pure};
	max-width: 100%;
`;

const Container = styled.div`
	align-items: center;
	color: ${({ theme }) => theme.colors.font.firstHeader};
	display: flex;
	flex-wrap: nowrap;
	font-family: 'Times New Roman', Times, serif;
	font-size: ${({ theme }) => theme.sizes.font.firstHeader};
	font-style: italic;
	font-weight: 600;
	justify-content: center;
	margin: 0 auto;
	max-width: ${({ theme }) => theme.sizes.screen.maximal};
	padding: 0 1rem;
	white-space: nowrap;
`;

const Picture = styled.picture`
	align-items: center;
	display: flex;
	justify-content: center;
	padding: 0.3rem 1rem;
`;

const Img = styled.img`
	filter: drop-shadow(0.5vw 0.5vw 0.3vw ${({ theme }) => theme.colors.chadows.firstHeader.scrooge});
	height: auto;
	max-width: 7vw;
	width: 100%;
`;

const TextLeft = styled.div`
	align-self: flex-start;
	text-shadow: 0.5vw 0.5vw 0.3vw ${({ theme }) => theme.colors.chadows.firstHeader.font};
`;

const TextRight = styled.div`
	align-self: flex-end;
	text-shadow: 0.5vw 0.5vw 0.3vw ${({ theme }) => theme.colors.chadows.firstHeader.font};
`;

export { Header, Container, Picture, Img, TextLeft, TextRight };
