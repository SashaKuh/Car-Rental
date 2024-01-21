import { DropdownBrand } from 'components/Dropdown/Brand/Brand';
import { useEffect, useState } from 'react';
import {DropdownPrice} from 'components/Dropdown/Price/Price';
import {RangeFilter} from 'components/RangeFilter/RangeFilter';
import { AllFilter, SearchBtn } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedBrand } from '../../redux/cars/carsFilterSlice';
import { filterCars } from '../../redux/cars/carsOperations';
import { updateCars } from '../../redux/cars/carsSlice';
import jsonData from '../../data/macke.json';

export const Filter = () => {
  const [brandOptions] = useState([]);

  const selectedBrand = useSelector(state => state.filter.selectedBrand);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const brands = jsonData.map(brand => ({ value: brand, label: brand }));
      console.log(brands);
    };
    fetchData();
  }, []);

const handleBrandSelect = async brand => {
  if (brand) {
    dispatch(setSelectedBrand(brand));
    try {
      const filteredCars = await filterCars(brand);
      dispatch(updateCars(filteredCars));
    } catch (error) {
      console.error('Error fetching filtered cars data:', error);
    }
  }
};

const handleApplyFilters = async () => {
  try {
    const filteredCars = await filterCars(selectedBrand);
    dispatch(updateCars(filteredCars));
    dispatch(setSelectedBrand(''));
  } catch (error) {
    console.error('Помилка при фільтрації даних про автомобілі:', error);
  }
};

  return (
    <AllFilter>
      <DropdownBrand options={brandOptions} onSelect={handleBrandSelect} />
      <DropdownPrice />
      <RangeFilter/>
      <SearchBtn onClick={handleApplyFilters}>Search</SearchBtn>
    </AllFilter>
  );
};
