import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/types';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
