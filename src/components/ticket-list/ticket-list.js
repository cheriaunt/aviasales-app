import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Spin, Alert } from 'antd';

import Ticket from '../ticket';
import { sortCheap, sortFast, sortOptim } from '../../store/sortReducer';
import { fetchTickets } from '../../services/ticket-service';

import classes from './ticket-list.module.scss';

const TicketList = () => {
  const filtering = (el, allChecked, withoutChecked, oneChecked, twoChecked, threeChecked) =>
    el.filter((ticket) => {
      const stopsForward = ticket.segments[0].stops.length;
      const stopsBackward = ticket.segments[1].stops.length;

      const choosedStops = (checkedProp, stops) => checkedProp && stopsForward === stops && stopsBackward === stops;

      if (
        allChecked ||
        choosedStops(withoutChecked, 0) ||
        choosedStops(oneChecked, 1) ||
        choosedStops(twoChecked, 2) ||
        choosedStops(threeChecked, 3)
      ) {
        return true;
      }

      return false;
    });

  const dispatch = useDispatch();
  const allTickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector((state) => state.tickets.loading);
  const { allChecked, withoutChecked, oneChecked, twoChecked, threeChecked } = useSelector(
    (state) => state.filterStops,
  );

  const sorts = useSelector((state) => state.sort);
  const [activeButtons, setActiveButtons] = useState('cheap');

  const [ticketNumber, setTicketNumber] = useState(5);

  const sortTickets = (tickets, sort) =>
    tickets.sort((a, b) => {
      if (sort === 'cheap') return a.price - b.price;
      if (sort === 'fast') {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
      }

      return (
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration) +
        (a.price - b.price)
      );
    });

  const sortedTickets = useMemo(() => sortTickets(allTickets, sorts), [sorts, allTickets]);
  const filteredAndSortedTickets = filtering(
    sortedTickets,
    allChecked,
    withoutChecked,
    oneChecked,
    twoChecked,
    threeChecked,
  );
  const packTickets = filteredAndSortedTickets.slice(0, ticketNumber);
  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

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
        {loading && (
          <Spin tip='Loading' size='small'>
            <div className='content' />
          </Spin>
        )}
        {!loading && filteredAndSortedTickets.length === 0 ? (
          <Alert message='Рейсов, подходящих под заданные фильтры, не найдено.' type='info' showIcon />
        ) : (
          packTickets.map((el) => (
            <Ticket
              key={uuidv4()}
              item={el}
              price={el.price}
              Img={el.carrier}
              forward={el.segments[0]}
              backward={el.segments[1]}
            />
          ))
        )}
      </ul>
      <div>
        {!loading && filteredAndSortedTickets.length !== 0 && (
          <button
            type='button'
            className={`${classes.btn} ${classes['show-more']}`}
            onClick={() => setTicketNumber((prevTicketNumber) => prevTicketNumber + 5)}
          >
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        )}
      </div>
    </div>
  );
};

export default TicketList;
