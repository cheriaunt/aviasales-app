import classes  from './filter.module.scss';

const Filter = ()=>{
    return(
        <aside className={classes.filter}>
            <h1 className={classes['filter-head']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
            <form>
                <ul className={classes['item-list']}>
                    <li className={classes.item}>
                        <label className={classes['item-name']}>
                        <input className={`${classes.input} ${classes.all}`} type='checkbox' />
                        <span className={classes.checkbox}></span>Все
                        </label>
                    </li>
                    <li className={classes.item}>
                        <label className={classes['item-name']}>
                        <input className={`${classes.input} ${classes.without}`} type='checkbox' />
                        <span className={classes.checkbox}></span>Без пересадок
                        </label>
                    </li>
                    <li className={classes.item}>
                        <label className={classes['item-name']}>
                        <input className={`${classes.input} ${classes.one}`} type='checkbox' />
                        <span className={classes.checkbox}></span>1 пересадка
                        </label>
                    </li>
                    <li className={classes.item}>
                        <label className={classes['item-name']}>
                        <input className={`${classes.input} ${classes.two}`} type='checkbox' />
                        <span className={classes.checkbox}></span>2 пересадки
                        </label>
                    </li>
                    <li className={classes.item}>
                        <label className={classes['item-name']}>
                        <input className={`${classes.input} ${classes.three}`} type='checkbox' />
                        <span className={classes.checkbox}></span>3 пересадки
                        </label>
                    </li>
                </ul>
            </form>
            </aside>
    );
}
export default Filter;