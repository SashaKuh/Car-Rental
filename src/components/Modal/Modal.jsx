import { useEffect } from 'react';

import {
  Accessories,
  AccessoriesDetail,
  Backdrop,
  BtnClose,
  Condition,
  Description,
  FlexWrap,
  ImageContainer,
  Info,
  ModalWindow,
  Model,
  Rental,
  RentalButton,
  Title,
    Value,
  Img
} from './Modal.styled';

export const Modal = ({ isOpen, onClose, car }) => {

    useEffect(() => {
        const handleKeyPress = e => {
            onClose();
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [onClose]);
    
    
    useEffect(() => {
        const body = document.body;
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        return () => {
            body.style.overflow = 'auto';
        };
    }, [isOpen]);
    
    

    const rentalConditionsString = car.rentalConditions || '';

    const rentalConditionsArray = rentalConditionsString.split('\n');

    return (
        <Backdrop onClick={onClose}>
            <ModalWindow onClick={e => e.stopPropagation()}>
                <ImageContainer>
                    <Img
                        src={car.img}
                        alt={car.make}
                        style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </ImageContainer>

                <Title>
                    {`${car.make}`}
                    <Model> {`${car.model}`}, </Model>
                    {`${car.year}`}
                </Title>

                <Info>
                    {`${car.address.split(',').slice(-2).join(', ')} | ${car.rentalCompany
                        } | ${car.type} | ${car.id} | ${car.accessories[0]}`}
                </Info>

                <Description>{`${car.description}`}</Description>
                <Accessories>Accessories and functionalities:</Accessories>

                <AccessoriesDetail>
                    {car.accessories.map((accessory, index) => (
                        <p key={index}>{accessory} |  </p>
                    ))}
                </AccessoriesDetail>
                <Rental>Rental Conditions: </Rental>
                <FlexWrap>
                    {rentalConditionsArray.map((condition, index) => (
                        <Condition key={index}>{condition}</Condition>
                    ))}
                    <Condition>
                        {' '}
                        Millage:&nbsp;{' '}
                        <Value>
                            {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </Value>{' '}
                    </Condition>

                    <Condition>
                        Price:&nbsp; <Value> {`${car.rentalPrice}`} </Value>
                    </Condition>
                </FlexWrap>
                <RentalButton to="tel:+1234567890">Rental Car</RentalButton>
                <BtnClose onClick={onClose} width={12} height={12}>
                    X
                </BtnClose>
            </ModalWindow>
        </Backdrop>
    );
};