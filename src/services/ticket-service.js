/* eslint-disable no-unused-vars */
import { getAllTickets, getFirstTickets } from '../store/ticketsReducer';

const _apiBase = 'https://aviasales-test-api.kata.academy/';

// export async function fetchSearchId() {
//   const reqID = await fetch(`${_apiBase}search`);
//   const resID = await req.json();
//   return res.searchId;
// }

export function fetchTickets() {
  return async function (dispatch) {
    const reqID = await fetch(`${_apiBase}search`);
    const { searchId } = await reqID.json();

    let newUrl = new URL('tickets', _apiBase);
    newUrl.searchParams.set('searchId', searchId);
    const req = await fetch(newUrl);
    const { tickets, stop } = await req.json();
    return dispatch(getFirstTickets(tickets));
  };
}
