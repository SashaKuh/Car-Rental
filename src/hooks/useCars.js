import { useSelector } from 'react-redux';
import { selectCars, selectLoading, selectError } from '../redux/selectors';

export const useCars = () => {
    return {
        cars: useSelector(selectCars),
        isLoader: useSelector(selectLoading),
        isError: useSelector(selectError)
    }
};