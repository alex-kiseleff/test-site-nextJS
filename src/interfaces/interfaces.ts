//export interface IUrlsPicture {
//	webp: string;
//	png: string;
//	path: string;
//}

//export interface IBurgerMenu {
//	isMenuOpen: boolean;
//}

//export interface IIsMobile {
//	isMobile: boolean;
//}

//export interface IItemMenu {
//	id: string;
//	path: string;
//	name: string;
//}

//export interface IMenuState {
//	itemsMenu: Array<IItemMenu>;
//	loading: boolean;
//	error: string | null | undefined;
//}

//export interface INewsBlock {
//	id?: string;
//	title: string;
//	description: string;
//}

//export interface INewsState {
//	news: Array<INewsBlock>;
//	loading: boolean;
//	error: string | null | undefined;
//}

//export interface IInfoAbout {
//	id?: string;
//	title?: string;
//	paragraph: string;
//}

//export interface IInformationAboutState {
//	infoAbout: Array<IInfoAbout>;
//	loading: boolean;
//	error: string | null | undefined;
//}

//export interface IMessageContext {
//	message: string;
//	setMessage: (newState: string) => void;
//}

//export interface IClickIdContext {
//	clickId: string;
//	setClickId: (newState: string) => void;
//}

//export interface IContact {
//	post: string;
//	name: string;
//	phone: string;
//	number: string;
//	address?: string;
//	email?: string;
//}

//export interface IContactsState {
//	contacts: Array<IContact>;
//	loading: boolean;
//	error: string | null | undefined;
//}

//export interface IOperator {
//	id: string;
//	webp: string;
//	png: string;
//	path: string;
//}

//export interface IOperatorsContentState {
//	operators: Array<IOperator>;
//	loading: boolean;
//	error: string | null | undefined;
//}

//export interface IVisibility {
//	message?: string;
//}

//export interface IPanelService {
//	id: string;
//	title: string;
//	path: string;
//}

//export interface IPanelServiceState {
//	panelService: Array<IPanelService>;
//	loading: boolean;
//	error: string | null | undefined;
//}

//export interface ICallback {
//	(response: Promise<[]>): void;
//}
//export interface ICallback {
//	(response: Promise<Array<IContact | IOperator | IItemMenu>>): void;
//}

//export interface IPayForPhone {
//	isOneValid: boolean;
//	isTwoValid: boolean;
//	isThreeValid: boolean;
//	isFourValid: boolean;
//	isSumValid: boolean;
//	oneInput: string;
//	twoInput: string;
//	threeInput: string;
//	fourInput: string;
//	sumInput: string;
//	onButton: boolean;
//}

//export interface IDataForSubmit {
//	oneInput: string;
//	twoInput: string;
//	threeInput: string;
//	fourInput: string;
//	sumInput: string;
//}

//export interface IDataForSubmitState {
//	data: IDataForSubmit;
//	success: boolean;
//	error: string | null | undefined;
//}

export default {};
