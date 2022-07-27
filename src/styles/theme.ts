import { ITheme } from '../interfaces/styled';

/* variables */
const Theme: ITheme = {
	/* размеры */
	sizes: {
		font: {
			firstHeader: '5vw',
			message: '1.2rem',
			panelService: '1.4rem',
			secondHeader: {
				title: '1.5rem',
			},
			menuItem: '0.9rem',
		},
		screen: {
			maximal: '1400px',
		},
	},

	/* временные задержки */
	durations: {
		ms200: '0.2s',
		ms300: '0.3s',
		ms500: '0.5s',
	},

	/* цвета */
	colors: {
		font: {
			firstHeader: '#ffb',
			aboutUs: '#f0f000',
			contacts: '#f0f000',
			main: '#f0f000',
			news: '#f0f000',
			newsColumn: '#d1d1a3',
			footer: '#000',
			toPay: '#f0f000',
			message: '#000',
			panelService: '#000',
			sumForPay: '#000',
			inputWithMask: '#000',
			page404: {
				title: '#000',
				container: '#1717ff',
			},
			noService: {
				title: '#000',
				container: '#1717ff',
			},
		},
		chadows: {
			firstHeader: {
				pure: '#a4a400',
				scrooge: '#000',
				font: '#000',
			},
			operatorCard: '#282800',
			panelService: '#282800',
			toPay: '#282800',
			buttonSubmit: '#000',
			buttonReset: '#000',
		},
		bg: {
			firstHeader: '#bfbf00',
			secondHeader: '#bfbf00',
			aboutUs: '#8c8c00',
			contacts: '#8c8c00',
			main: '#8c8c00',
			newsColumn: '#626200',
			page404: '#9f9f00',
			news: '#8c8c00',
			footer: '#bfbf00',
			toPay: '#8c8c00',
			message: '#ff1515',
			panelService: '#a8a800',
			noService: '#8c8c00',
			payForMobile: '#8c8c00',
			buttonSubmit: {
				usually: '#959500',
				active: '#888800',
				hover: '#9d9d00',
			},
			buttonReset: {
				usually: '#959500',
				active: '#888800',
				hover: '#9d9d00',
			},
		},
		border: {
			sumForPay: '#000',
			wrapImg: '#626200',
			inputWithMask: '#000',
		},
	},

	/* шрифты */
	fonts: {
		fontForDesign: 'FontForDesign',
		fontForMenu: 'FontForMenu',
		robotoRegular: 'RobotoRegular',
		robotoMedium: 'RobotoMedium',
	},

	/*break point*/
	media: {
		minWidthXS: '0',
		maxWidthSM: '575.9px',
		minWidthSM: '576px',
		maxWidthMD: '767.9px',
		minWidthMD: '768px',
		maxWidthLG: '991.9px',
		minWidthLG: '992px',
		maxWidthXL: '1399.9px',
		minWidthXL: '1400px',
	},
	visibility: true,
};

export { Theme };
