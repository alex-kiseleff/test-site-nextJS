/**
 * @function useOnClickOutside - вызывает коллбэк, если событие
 * [mousedown] происходит не на элементе с ссылкой [ref].
 * @param {RefObject<HTMLDivElement>} ref - ссылка на элемент.
 * @param {() => void} handler - коллбэк.
 * @returns {void}
 */
import { RefObject, useEffect } from 'react';

const useOnClickOutside = (
	ref: RefObject<HTMLDivElement>,
	handler: () => void
): void => {
	useEffect(() => {
		const listener: EventListenerOrEventListenerObject = (event): void => {
			if (
				!ref.current ||
				ref.current.contains(event.target as HTMLDivElement)
			) {
				return;
			}
			handler();
		};
		document.addEventListener('mousedown', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
