/* eslint-disable no-unused-vars */
import { getAllPackTickets, getFirstPackTickets } from '../store/ticketsReducer';

const _apiBase = 'https://aviasales-test-api.kata.academy/';

export function fetchTickets() {
  return async function (dispatch) {
    const reqID = await fetch(`${_apiBase}search`);
    const { searchId } = await reqID.json();

    let firstPackTickets = false;
    let notAllPackTickets = true;
    const allTickets = [];
    let newUrl = new URL('tickets', _apiBase);
    newUrl.searchParams.set('searchId', searchId);
    while (notAllPackTickets) {
      const req = await fetch(newUrl);
      if (req.status !== 200) continue;
      const { tickets, stop } = await req.json();
      if (!firstPackTickets) {
        firstPackTickets = true;
        dispatch(getFirstPackTickets(tickets));
      }
      allTickets.push(...tickets);
      if (stop) notAllPackTickets = false;
    }
    return dispatch(getAllPackTickets(allTickets));
  };
}
