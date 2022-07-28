/**
 * @component AboutComponent - рендерит страницу [About].
 * @type {NextPage<IProps>}.
 * @param {IProps} props - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetStaticProps, NextPage } from 'next';
import InformationColumn, {
	IAbout,
} from '../components/InformationColumnComponent/InformationColumnComponent';
import { INewsBlock } from '../components/NewsBlockComponent/NewsBlockComponent';
import NewsColumnComponent from '../components/NewsColumnComponent/NewsColumnComponent';
import { Container, Section } from '../styles/pages/about.styles';

interface IProps {
	about: Array<IAbout>;
	news: Array<INewsBlock>;
}

const AboutComponent: NextPage<IProps> = (props): JSX.Element => {
	return (
		<Section>
			<Container>
				<InformationColumn {...props} />
				<NewsColumnComponent {...props} />
			</Container>
		</Section>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await fetch(`${process.env.API_HOST}/info-about`);
		const about = await response.json();

		const res = await fetch(`${process.env.API_HOST}/news`);
		const news = await res.json();

		if (about.errors || !about) {
			return { notFound: true };
		}

		if (news.error || !news) {
			return { notFound: true };
		}
		return {
			props: {
				about,
				news,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};
export default AboutComponent;
