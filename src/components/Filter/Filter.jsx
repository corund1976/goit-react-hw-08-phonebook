import { useSelector, useDispatch } from "react-redux";

import s from './Filter.module.css';
import { changeFilter } from '../../redux/contacts/contactsActions';
import { getFilter } from '../../redux/contacts/contactsSelectors';

function Filter() {
  const filterToFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <label className={s.label}>
      Find contacts by name / number
      <input
        type="text"
        value={filterToFilter}
        onChange={onChange}
        className={s.input}>
      </input>
    </label>
  );
};

export default Filter;