import { useSelector, useDispatch } from "react-redux";

import s from './Filter.module.css';
import { changeFilter } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

function Filter() {
  const filterToFilter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <label className={s.label}>
      Найти по имени / номеру
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