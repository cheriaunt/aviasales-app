/* eslint-disable no-unused-vars */
import { Card } from 'antd';

import classes from './ticket.module.scss';

const Ticket = ({ price, backward, idImg, forward }) => {
  const getStops = (stop) => {
    if (stop === 0) return '0 ПЕРЕСАДОК';
    if (stop === 1) return '1 ПЕРЕСАДКА';
    return `${stop} ПЕРЕСАДКИ`;
  };

  return (
    <li className={classes['avia-ticket']}>
      <Card>
        <div className={classes['avia-head']}>
          <h1 className={classes.price}>{`${price} P`}</h1>
          <img className={classes.logo} src={`//pics.avs.io/99/36/${idImg}.png`} alt='logotype avia' />
        </div>
        <div className={classes.table}>
          <div className={classes['column-left']}>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>
                {forward.origin} - {forward.destination}
              </div>
              <div className={classes.item}>10:45 - 08:00</div>
            </div>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>
                {backward.origin} - {backward.destination}
              </div>
              <div className={classes.item}>11:20 - 00:50</div>
            </div>
          </div>
          <div className={classes['column-center']}>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>В ПУТИ</div>
              <div className={classes.item}>{forward.duration}</div>
            </div>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>В ПУТИ</div>
              <div className={classes.item}>{backward.duration}</div>
            </div>
          </div>
          <div className={classes['column-right']}>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>{getStops(forward.stops.length)}</div>
              <div className={classes.item}>{forward.stops.join(', ')}</div>
            </div>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>{getStops(backward.stops.length)}</div>
              <div className={classes.item}>{backward.stops.join(', ')}</div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default Ticket;
