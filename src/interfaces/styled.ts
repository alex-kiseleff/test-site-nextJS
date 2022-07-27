export interface ITheme {
	sizes: {
		font: {
			firstHeader: string;
			message: string;
			panelService: string;
			secondHeader: {
				title: string;
			};
			menuItem: string;
		};
		screen: {
			maximal: string;
		};
	};
	durations: {
		ms200: string;
		ms300: string;
		ms500: string;
	};
	colors: {
		font: {
			firstHeader: string;
			aboutUs: string;
			contacts: string;
			main: string;
			newsColumn: string;
			news: string;
			footer: string;
			toPay: string;
			message: string;
			panelService: string;
			sumForPay: string;
			inputWithMask: string;
			page404: {
				title: string;
				container: string;
			};
			noService: {
				title: string;
				container: string;
			};
		};
		chadows: {
			firstHeader: {
				pure: string;
				scrooge: string;
				font: string;
			};
			operatorCard: string;
			panelService: string;
			toPay: string;
			buttonSubmit: string;
			buttonReset: string;
		};
		bg: {
			firstHeader: string;
			secondHeader: string;
			aboutUs: string;
			contacts: string;
			main: string;
			newsColumn: string;
			page404: string;
			news: string;
			footer: string;
			toPay: string;
			message: string;
			panelService: string;
			noService: string;
			payForMobile: string;
			buttonSubmit: {
				usually: string;
				hover: string;
				active: string;
			};
			buttonReset: {
				usually: string;
				hover: string;
				active: string;
			};
		};
		border: {
			sumForPay: string;
			wrapImg: string;
			inputWithMask: string;
		};
	};
	fonts: {
		fontForDesign: string;
		fontForMenu: string;
		robotoRegular: string;
		robotoMedium: string;
	};
	media: {
		minWidthXS: string;
		maxWidthSM: string;
		minWidthSM: string;
		maxWidthMD: string;
		minWidthMD: string;
		maxWidthLG: string;
		minWidthLG: string;
		maxWidthXL: string;
		minWidthXL: string;
	};
	visibility: boolean;
}
