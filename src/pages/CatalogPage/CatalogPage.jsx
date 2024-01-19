import { useDispatch, useSelector } from 'react-redux';
import { CardList } from '../../components/CardList/CardList';
import { setCurrentPage } from '../../redux/cars/carsSlice';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.cars.currentPage);
    const cars = useSelector((state) => state.cars.cars);
    const isLoading = useSelector((state) => state.cars.isLoading);

    const handleLoadMore = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    return (
        <div className='container'>
            <CardList />
            {cars.length > 0 && !isLoading && (
                <button onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
};

export default CatalogPage;
