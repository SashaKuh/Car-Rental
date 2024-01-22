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
    const handleKeyPress = (e) => {
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

  const renderConditions = () => {
    const rentalConditionsArray = car.rentalConditions?.split('\n') || [];
    return rentalConditionsArray.map((condition, index) => {
      const isMinimumAgeCondition = condition.toLowerCase().includes('minimum age');
      const [label, value] = condition.split(':').map((item) => item.trim());

      return (
        <Condition key={index}>
          {isMinimumAgeCondition ? (
            <>
              {label}:&nbsp;
              <Value>{value}</Value>
            </>
          ) : (
            <>
              {label}:&nbsp;
              <Value>{value}</Value>
            </>
          )}
        </Condition>
      );
    });
  };

  return (
    <Backdrop onClick={onClose}>
      <ModalWindow onClick={(e) => e.stopPropagation()}>
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
            <p key={index}>{accessory} | </p>
          ))}
        </AccessoriesDetail>
        <Rental>Rental Conditions: </Rental>
      <FlexWrap>
        {renderConditions()}
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

        <RentalButton to="tel:+380730000000">Rental Car</RentalButton>
        <BtnClose onClick={onClose} width={12} height={12}>
          X
        </BtnClose>
      </ModalWindow>
    </Backdrop>
  );
};

