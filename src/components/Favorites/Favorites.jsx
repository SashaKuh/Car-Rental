// Favorites.js
import {CardItem} from 'components/CardItem/CardItem';
import { useSelector } from 'react-redux';
import { Container, List } from './Favorites.styled';

const Favorites = () => {
  const likedCars = useSelector(state => state.favorites.likedCars);
  const allCars = useSelector(state => state.cars.cars);

  return (
    <Container>
      <List>
        {likedCars.map(carId => {
          const car = allCars.find(c => c.id === carId);

          if (car) {
            return <CardItem key={carId} car={car} />;
          } else {
            return null;
          }
        })}
      </List>
    </Container>
  );
};

export default Favorites;