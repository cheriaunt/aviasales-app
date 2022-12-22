import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Ticket from '../ticket';
import { sortCheap, sortFast, sortOptim } from '../../store/sortReducer';
import { fetchTickets } from '../../services/ticket-service';

import classes from './ticket-list.module.scss';

const TicketList = () => {
  const dispatch = useDispatch();
  const allTickets = useSelector((state) => state.tickets.tickets);

  const sorts = useSelector((state) => state.sort);
  const [activeButtons, setActiveButtons] = useState();

  const [ticketNum, setTicketNum] = useState(5);
  const packTickets = allTickets.slice(0, ticketNum);

  const sortTickets = (tickets, sort) => {
    allTickets.sort((a, b) => {
      if (sort === 'cheap') return a.price - b.price;
      if (sort === 'fast') {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
      }
      return (
        a.price -
        b.price +
        (a.segments[0].duration + a.segments[1].duration) -
        (b.segments[0].duration + b.segments[1].duration)
      );
    });
  };

  useMemo(() => sortTickets(allTickets, sorts), [allTickets, sorts]);

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);
  console.log(allTickets);

  const isSelectCheap = activeButtons === 'cheap' && 'selected';
  const isSelectFast = activeButtons === 'fast' && 'selected';
  const isSelectOptim = activeButtons === 'optim' && 'selected';
  const clazzCheap = isSelectCheap ? 'selected' : '';
  const clazzFast = isSelectFast ? 'selected' : '';
  const clazzOptim = isSelectOptim ? 'selected' : '';
  return (
    <div className={classes.search}>
      <div className={classes['search-btn']}>
        <button
          type='button'
          className={`${classes.btn} ${classes.cheap} ${classes[`${clazzCheap}`]}`}
          onClick={() => {
            setActiveButtons('cheap');
            dispatch(sortCheap());
          }}
        >
          САМЫЙ ДЕШËВЫЙ
        </button>
        <button
          type='button'
          className={`${classes.btn} ${classes.fast} ${classes[`${clazzFast}`]}`}
          onClick={() => {
            setActiveButtons('fast');
            dispatch(sortFast());
          }}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
        <button
          type='button'
          className={`${classes.btn} ${classes.optim} ${classes[`${clazzOptim}`]}`}
          onClick={() => {
            setActiveButtons('optim');
            dispatch(sortOptim());
          }}
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
      <ul className={classes.tickets}>
        {packTickets.map((item) => (
          <Ticket
            key={uuidv4()}
            item={item}
            price={item.price}
            idImg={item.carrier}
            forward={item.segments[0]}
            backward={item.segments[1]}
          />
        ))}
      </ul>
      <div>
        <button
          type='button'
          className={`${classes.btn} ${classes['show-more']}`}
          onClick={() => setTicketNum((prevTicketNum) => prevTicketNum + 5)}
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    </div>
  );
};

export default TicketList;
