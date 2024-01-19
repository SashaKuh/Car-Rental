import { CardItem } from 'components/CardItem/CardItem';
import { useCars } from 'hooks/useCars';
import { ListWrap } from './CardList.styled';

export const CardList = () => {
    const { cars } = useCars();

    return (
        <ListWrap>
            {cars.map(car => (
                <CardItem key={car.id} car={car} />
            ))}
        </ListWrap>
    );
};