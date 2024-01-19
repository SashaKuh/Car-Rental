import { useState } from 'react';

import { Modal } from 'components/Modal/Modal'
import {
    Button,
    ItemWrapper,
    InfoWrapper,
} from './CardItem.styled'

export const CardItem = ({ car }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMoreClick = () => {
        setIsModalOpen(true);
    }
    
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return(
    <ItemWrapper>
        <img src={car.img} alt={`${car.make} ${car.model}`} />
        <InfoWrapper>
            <p>{car.make}</p>
            <p>{car.model}</p>
            <p>{car.year}</p>
        </InfoWrapper>
            <Button onClick={handleMoreClick}>Learn more</Button>
            {isModalOpen && <Modal isOpen={handleMoreClick} onClose={handleModalClose} car={car}/>}
        </ItemWrapper>
    )
}