/**
 * @component NewsComponent - рендерит новостную страницу [News] с
 * выбранной новостью на странице [About].
 * @type {NextPage<Array<INewsBlock>>}.
 * @param {Array<INewsBlock>} news - данные с сервера.
 * @returns {JSX.Element}.
 */
import { GetServerSideProps, NextPage } from 'next';
import NewsBlockComponent, {
	INewsBlock,
} from '../../components/NewsBlockComponent/NewsBlockComponent';
import { Container, Section } from '../../styles/pages/news.styles';
import db from '../../DATA_BASE.json';

interface IData {
	news: Array<INewsBlock>;
}

const NewsComponent: NextPage<IData> = ({ news }): JSX.Element => {
	return (
		<Section>
			<Container>{<NewsBlockComponent {...news[0]} />}</Container>
		</Section>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
// 		const response = await fetch(
// 			`http://localhost:3000/news?id=${ctx.query.id}`
// 		);
// 		const news = await response.json();
		const news = db.news;
		
// 		if (news.errors) {
// 			return { notFound: true };
// 		}

// 		if (!news) {
// 			return { notFound: true };
// 		}
		return {
			props: {
				news,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default NewsComponent;
