/**
 * @component ContactsComponent - рендерит страницу [Contacts].
 * @type {NextPage<Array<IContact>>}.
 * @param {Array<IContact>} props - данные с сервера.
 * @returns {JSX.Element}
 */
import { GetStaticProps, NextPage } from 'next';
import LeftColumnComponent, { IContact } from '../components/LeftColumnComponent/LeftColumnComponent';
import RightColumnComponent from '../components/RightColumnComponent/RightColumnComponent';
import { Container, Section } from '../styles/pages/contacts.styles';

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
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/db`);
		const data = await response.json();

		if (data.errors) {
			return { notFound: true };
		}

		if (!data) {
			return { notFound: true };
		}
		return {
			props: {
				contacts: data.contacts,
			},
		};
	} catch (error) {
		console.log(error);

		return { props: {} };
	}
};

export default ContactsComponent;
