import { useDispatch, useSelector } from 'react-redux';

import { filterChange } from '../../store/filterReducer';

import classes from './filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filterStops);
  return (
    <aside className={classes.filter}>
      <h1 className={classes['filter-head']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <form>
        <ul className={classes['item-list']}>
          <li className={classes.item}>
            <label className={classes['item-name']}>
              <input
                className={`${classes.input} ${classes.all}`}
                type='checkbox'
                checked={filters.allChecked}
                onChange={() => dispatch(filterChange('allChecked'))}
              />
              <span className={classes.checkbox}></span>Все
            </label>
          </li>
          <li className={classes.item}>
            <label className={classes['item-name']}>
              <input
                className={`${classes.input} ${classes.without}`}
                type='checkbox'
                checked={filters.withoutChecked}
                onChange={() => dispatch(filterChange('withoutChecked'))}
              />
              <span className={classes.checkbox}></span>Без пересадок
            </label>
          </li>
          <li className={classes.item}>
            <label className={classes['item-name']}>
              <input
                className={`${classes.input} ${classes.one}`}
                type='checkbox'
                checked={filters.oneChecked}
                onChange={() => dispatch(filterChange('oneChecked'))}
              />
              <span className={classes.checkbox}></span>1 пересадка
            </label>
          </li>
          <li className={classes.item}>
            <label className={classes['item-name']}>
              <input
                className={`${classes.input} ${classes.two}`}
                type='checkbox'
                checked={filters.twoChecked}
                onChange={() => dispatch(filterChange('twoChecked'))}
              />
              <span className={classes.checkbox}></span>2 пересадки
            </label>
          </li>
          <li className={classes.item}>
            <label className={classes['item-name']}>
              <input
                className={`${classes.input} ${classes.three}`}
                type='checkbox'
                checked={filters.threeChecked}
                onChange={() => dispatch(filterChange('threeChecked'))}
              />
              <span className={classes.checkbox}></span>3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </aside>
  );
};
export default Filter;
