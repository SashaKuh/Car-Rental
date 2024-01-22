import React, { useState } from 'react';
import Select from 'react-select';
import makes from '../../data/macke.json';
import { price } from '../../data/price';
import {
  Form,
  Span,
  colourStylesCar,
  colourStylesPrice,
  InputFrom,
  InputTo,
  Button,
} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filtersAdverts } from '../../redux/cars/carsFilterSlice';

export const Filter = () => {
  const optionsBrands = makes.map(make => ({ value: make, label: make }));
  const optionsPriceFrom = price().map(price => ({
    value: price,
    label: `From ${price}$`,
  }));

  const optionsPriceTo = price().map(price => ({
    value: price,
    label: `To ${price}$`,
  }));

  const dispatch = useDispatch();
  const [resetFilters, setResetFilters] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const make = formData.get('make') || '';
    const priceFrom = formData.get('priceFrom') || '';
    const priceTo = formData.get('priceTo') || '';
    const mileageFrom = formData.get('mileageFrom') || '';
    const mileageTo = formData.get('mileageTo') || '';

    dispatch(
      filtersAdverts({
        make,
        priceFrom,
        priceTo,
        mileageFrom,
        mileageTo,
      })
    );

    setResetFilters(false);
  };

  const handleReset = () => {
    dispatch(filtersAdverts({ make: '', priceFrom: '', priceTo: '', mileageFrom: '', mileageTo: '' }));
    setResetFilters(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Span>Car brand</Span>
        <Select
          name="make"
          components={{
            IndicatorSeparator: null,
          }}
          placeholder="Enter the text"
          options={optionsBrands}
          styles={colourStylesCar}
        />
      </label>
      <label>
        <Span>Price/ 1 hour</Span>
        <div>
          <Select
            name="priceFrom"
            components={{ IndicatorSeparator: null }}
            placeholder="From $"
            options={optionsPriceFrom}
            styles={colourStylesPrice}
          />
          <label>
            <Select
              name="priceTo"
              components={{ IndicatorSeparator: null }}
              placeholder="To $"
              options={optionsPriceTo}
              styles={colourStylesPrice}
            />
          </label>
        </div>
      </label>

      <label>
        <Span>Car mileage / km</Span>
        <div>
          <InputFrom placeholder="From" name="mileageFrom" />
          <InputTo placeholder="To" name="mileageTo" />
        </div>
      </label>
      <Button type="submit">Search</Button>
      <Button type="button" onClick={handleReset} disabled={resetFilters}>
        Clear
      </Button>
    </Form>
  );
};
