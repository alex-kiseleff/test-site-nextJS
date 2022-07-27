/**
 * @function saveToSessionStorage - записывает [value] в [sessionStorage]
 * с ключом [key].
 * @param {string} key - ключ.
 * @param {string} value - значение.
 * @returns {void}
 */
const saveToSessionStorage = (key: string, value: string | unknown) => {
	if (typeof value === 'object') {
		value = JSON.stringify(value);
	}
	sessionStorage.setItem(key, value as string);
};

/**
 * @function getFromSessionStorage - получает из [sessionStorage]
 * [value] с ключом [key].
 * @param {string} key - ключ.
 */
const getFromSessionStorage = (key: string) => {
	if (typeof window !== 'undefined') {
		if (key) {
			const value = sessionStorage.getItem(key);
			try {
				return JSON.parse(value as string);
			} catch (error) {
				return value;
			}
		}
	}
};

export { saveToSessionStorage, getFromSessionStorage };
