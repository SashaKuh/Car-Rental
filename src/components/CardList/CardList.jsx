import { CardItem } from 'components/CardItem/CardItem';
import { ListWrapper } from './CardList.styled';
import { useSelector } from 'react-redux';
import { selectCars, selectFilter } from '../../redux/selectors';

export const CardList = () => {
    const cars = useSelector(selectCars);
    const { make } = useSelector(selectFilter);

    let filteredCars = [];

    if (make === '') {
        filteredCars = cars;
    } else {
        if (make !== '') {
            filteredCars = cars.filter(
                car => car.make.toLowerCase() === make.toLowerCase()
            );
        }
    }

    return (
        <ListWrapper>
            {filteredCars.map(car => (
                <CardItem key={car.id} car={car} />
            ))}
        </ListWrapper>
    );
};
