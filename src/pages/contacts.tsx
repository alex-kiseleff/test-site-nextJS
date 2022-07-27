/**
 * @component ContactsComponent - рендерит страницу [Contacts].
 * @type {NextPage<Array<IContact>>}.
 * @param {Array<IContact>} props - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetStaticProps, NextPage } from 'next';
import LeftColumnComponent, {
	IContact,
} from '../components/LeftColumnComponent/LeftColumnComponent';
import RightColumnComponent from '../components/RightColumnComponent/RightColumnComponent';
import { Container, Section } from '../styles/pages/contacts.styles';
import db from '../../DATA_BASE.json';

interface IData {
	contacts: Array<IContact>;
}
const ContactsComponent: NextPage<IData> = (contacts): JSX.Element => {
	return (
		<Section>
			<Container>
				<LeftColumnComponent {...contacts} />
				<RightColumnComponent />
			</Container>
		</Section>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
// 		const response = await fetch('http://localhost:3000/contacts');
// 		const contacts = await response.json();
		const contacts = db.contacts;

// 		if (contacts.errors) {
// 			return { notFound: true };
// 		}

// 		if (!contacts) {
// 			return { notFound: true };
// 		}
		return {
			props: {
				contacts,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default ContactsComponent;
