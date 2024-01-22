import { useState } from 'react';

import { Modal } from 'components/Modal/Modal'
import {
    Button,
    ItemWrapper,
    InfoWrapper,
    ImageContainer,
    Title,
    CarType,
    CarPrice,
    Thumb
} from './CardItem.styled'

import { Model } from '../Modal/Modal.styled'

import { Heart } from 'components/Heart/Heart';
import { toggleLikedCar } from '../../redux/cars/favoriteSclice';
import { useDispatch, useSelector } from 'react-redux';

import {store} from '../../redux/store'


export const CardItem = ({ car }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMoreClick = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleHeart = carId => {
        dispatch(toggleLikedCar(carId));
        const likedCars = JSON.stringify(store.getState().favorites.likedCars);
        localStorage.setItem('likedCars', likedCars);
    }
    
    const isLiked = useSelector(state =>
        state.favorites.likedCars.includes(car.id)
    );
    

    return (
        <>
            <Thumb>
                <Heart carId={car.id} onToggle={() => handleHeart(car.id)} isLiked={isLiked} />
                <ItemWrapper>
                    <ImageContainer>
                        <img src={car.img} alt={`${car.make} ${car.model}`} />
                    </ImageContainer>
                    <Title>
                        <CarType>
                            {`${car.make}`}
                            <Model> {`${car.model}`}, </Model>
                            {`${car.year}`}
                        </CarType>
                        <CarPrice>{`${car.rentalPrice}`}</CarPrice>
                    </Title>
                    <InfoWrapper>
                        {`${car.address.split(',').slice(-2).join(' | ')} | 
                ${car.rentalCompany} | ${car.type} | ${car.id} | 
                ${car.accessories[0]}`}
                    </InfoWrapper>
                    <Button onClick={handleMoreClick}>Learn more</Button>
                    {isModalOpen && <Modal
                        isOpen={isModalOpen}
                        onClose={handleModalClose}
                        car={car}
                    />}
                </ItemWrapper>
            </Thumb>
        </>
    )
};
