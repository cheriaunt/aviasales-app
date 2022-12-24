/* eslint-disable no-unused-vars */
import { Card } from 'antd';
import { add, format, addMinutes } from 'date-fns';

import classes from './ticket.module.scss';

const Ticket = ({ price, forward, backward, Img }) => {
  const getStops = (stop) => {
    if (stop === 0) return '0 ПЕРЕСАДОК';
    if (stop === 1) return '1 ПЕРЕСАДКА';
    return `${stop} ПЕРЕСАДКИ`;
  };
  const getTime = (time) => {
    return format(addMinutes(time * 1000 * 60, new Date().getTimezoneOffset()), 'Hч mmм');
  };
  const getStartTime = (date) => {
    return format(new Date(date), 'H:mm');
  };
  const getFinishTime = (date, duration) => {
    return format(add(new Date(date), { minutes: duration }), 'H:mm');
  };
  return (
    <li className={classes['avia-ticket']}>
      <Card>
        <div className={classes['avia-head']}>
          <h1 className={classes.price}>{`${price} P`}</h1>
          <img className={classes.logo} src={`//pics.avs.io/99/36/${Img}.png`} alt='logotype avia' />
        </div>
        <div className={classes.table}>
          <div className={classes['column-left']}>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>
                {forward.origin} - {forward.destination}
              </div>
              <div className={classes.item}>{`${getStartTime(forward.date)} - ${getFinishTime(
                forward.date,
                forward.duration,
              )}`}</div>
            </div>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>
                {backward.origin} - {backward.destination}
              </div>
              <div className={classes.item}>{`${getStartTime(backward.date)} - ${getFinishTime(
                backward.date,
                backward.duration,
              )}`}</div>
            </div>
          </div>
          <div className={classes['column-center']}>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>В ПУТИ</div>
              <div className={classes.item}>{getTime(forward.duration)}</div>
            </div>
            <div className={classes.cell}>
              <div className={`${classes.item} ${classes.grey}`}>В ПУТИ</div>
              <div className={classes.item}>{getTime(backward.duration)}</div>
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
