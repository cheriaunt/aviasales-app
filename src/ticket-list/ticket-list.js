/* eslint-disable no-unused-vars */
import classes from './ticket-list.module.scss';

import Ticket from '../ticket/ticket';

const TicketList = () => {
    return (
        <div className={classes.search}>
          <div className={classes['search-btn']}>
            <button type='button' className={`${classes.btn} ${classes.cheap} ${classes.selected}`}>САМЫЙ ДЕШËВЫЙ
            </button>
            <button type='button' className={`${classes.btn} ${classes.fast}`}>САМЫЙ БЫСТРЫЙ
            </button>
            <button type='button' className={`${classes.btn} ${classes.optim}`}>ОПТИМАЛЬНЫЙ
            </button>
          </div>
          <ul className={classes.tickets}>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
          </ul>
          <div>
            <button type='button' className={`${classes.btn} ${classes['show-more']}`}>
              ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
            </button>
          </div>
        </div>
      )
}

export default TicketList;