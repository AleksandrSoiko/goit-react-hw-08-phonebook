import { useDispatch, useSelector } from 'react-redux';
import { change } from 'components/redux/contacts/filterSlice';
import { getFilter } from 'components/redux/contacts/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(change(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </Label>
  );
};
