import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from 'react-icons/fa';

import s from './Filter.module.css';
import { changeFilter } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';

function Filter() {
  const filterToFilter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <div className={s.labelWrapper}>
      <label className={s.label}>
        <input
          type="text"
          value={filterToFilter}
          onChange={onChange}
          placeholder='Find contact by name / phone'
          className={s.input}>
        </input>
        <FaSearch size='15' className={s.faSearch}/>
      </label>
    </div>
  );
};

export default Filter;