import { useDispatch, useSelector } from 'react-redux';
import { Label, Option, Select } from './Brand.styled';
import { selectFilteredBrand } from '../../../redux/selectors'
import {setSelectedBrand} from '../../../redux/cars/carsFilterSlice'

export const DropdownBrand = ({ options }) => {
  const dispatch = useDispatch();
  const selectedBrand = useSelector(selectFilteredBrand);

  const handleSelectChange = event => {
    const brand = event.target.value;
    dispatch(setSelectedBrand(brand));
  };

  return (
    <div>
      <Label>Car brand</Label>
      <Select onChange={handleSelectChange} value={selectedBrand}>
        <Option value="">Enter the text</Option>
        {options.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </Select>
    </div>
  );
};