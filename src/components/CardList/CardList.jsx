import React from 'react';
import { CardItem } from 'components/CardItem/CardItem';
import { ListWrapper } from './CardList.styled';
import { useSelector } from 'react-redux';
import { selectCars, selectFilter } from '../../redux/selectors';

export const CardList = () => {
    const cars = useSelector(selectCars);
    const { make, price, mileage } = useSelector(selectFilter);

    let filteredCars = cars.filter(car => {
        const carMake = car.make.toLowerCase();
        const carPrice = parseFloat(car.rentalPrice.substring(1));
        const carMileage = car.mileage;

        return (
            (make === '' || carMake === make.toLowerCase()) &&
            (price.from === '' || carPrice >= parseFloat(price.from)) &&
            (price.to === '' || carPrice <= parseFloat(price.to)) &&
            (mileage.from === '' || carMileage >= parseFloat(mileage.from)) &&
            (mileage.to === '' || carMileage <= parseFloat(mileage.to))
        );
    });

    return (
        <ListWrapper>
            {filteredCars.map(car => (
                <CardItem key={car.id} car={car} />
            ))}
        </ListWrapper>
    );
};