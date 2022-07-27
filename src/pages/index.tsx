/**
 * @component MainComponent - рендерит главную страницу со списком панелей-ссылок
 * с предоставляемыми услугами.
 * @type {NextPage<Array<IPanelService>>}.
 * @param {Array<IPanelService>} props - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetStaticProps, NextPage } from 'next';
import PanelServiceComponent from '../components/PanelServiceComponent/PanelServiceComponent';
import { Container, Section } from '../styles/pages/index.styles';

export interface IPanelService {
	id: string;
	title: string;
	path: string;
}

interface IData {
	panelsServices: Array<IPanelService>;
}
const MainComponent: NextPage<IData> = ({ panelsServices }): JSX.Element => {
	return (
		<Section>
			<Container>
				{panelsServices?.map((item) => (
					<PanelServiceComponent {...item} key={item.id} />
				))}
			</Container>
		</Section>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('http://localhost:3000/panels-services');
	const panelsServices = await response.json();

	try {
		if (panelsServices.errors) {
			return { notFound: true };
		}

		if (!panelsServices) {
			return { notFound: true };
		}

		return {
			props: {
				panelsServices,
			},
		};
	} catch (error) {
		console.log(error);

		return { notFound: true };
	}
};

export default MainComponent;
