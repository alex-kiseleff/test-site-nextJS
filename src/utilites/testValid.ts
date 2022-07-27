/**
 * @function isInvalid - проверяет соответствие [str] шаблону
 * регулярного выражения и заданному количеству символов [quantity].
 * @param {string} str - входящая строка.
 * @param {number} quantity - количество символов.
 * @returns {boolean}
 */
const isInvalid = (str: string, quantity: number): boolean => {
	if (/[^\d]/.test(str) || str[0] === '0' || str.length > quantity) {
		str.replace(/[^\d]/, '');
		return true;
	}
	return false;
};

/**
 * @function isTest - проверяет соответствие [str] шаблону
 * регулярного выражения и заданному количеству символов [quantity].
 * @param {string} str - входящая строка.
 * @param {number} quantity - количество символов.
 * @returns {boolean}
 */
const isTest = (str: string, quantity: number): boolean => {
	const reg = new RegExp('\\d{' + quantity + '}');
	if (reg.test(str)) {
		return true;
	}
	return false;
};

export { isInvalid, isTest };
