import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardList } from '../../components/CardList/CardList';
import { setCurrentPage } from '../../redux/cars/carsSlice';
import { LoadMoarWrapper, BtnLoad } from './CatalogPage.styled';
import { Filter } from 'components/Filter/Filter';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.cars.currentPage);
    const hasMoreData = useSelector((state) => state.cars.hasMoreData);

    const handleLoadMore = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    return (
        <div className='container'>
            <Filter />
            <CardList />
            <LoadMoarWrapper>
                {hasMoreData && <BtnLoad onClick={handleLoadMore}>Load More</BtnLoad>}
            </LoadMoarWrapper>
        </div>
    );
};

export default CatalogPage;
