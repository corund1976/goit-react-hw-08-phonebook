import { useSelector, useDispatch } from "react-redux";

import s from './Filter.module.css';
import { changeFilter } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';

function Filter() {
  const filterToFilter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <label className={s.label}>
      Find by name / phone
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