import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../types/types';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
