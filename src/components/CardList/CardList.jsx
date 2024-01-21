import { CardItem } from 'components/CardItem/CardItem';
import { ListWrapper } from './CardList.styled';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';

export const CardList = () => {
    const cars = useSelector(selectCars);

    return (
        <ListWrapper>
            {Array.isArray(cars) && cars.map(car => (
            
            <CardItem key={car.id} car={car} />
        ))}
    </ListWrapper>
    );
};