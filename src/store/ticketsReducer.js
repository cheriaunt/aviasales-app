const initialState = {
  loading: true,
  tickets: [],
};
export const GET_FIRST_PACK_TICKETS = 'GET_FIRST_PACK_TICKETS';
export const GET_ALL_PACK_TICKETS = 'GET_ALL_PACK_TICKETS';

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIRST_PACK_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };

    case GET_ALL_PACK_TICKETS:
      return {
        tickets: [...state.tickets, ...action.payload],
        loading: false,
      };

    default:
      return state;
  }
};

export const getFirstPackTickets = (payload) => ({ type: GET_FIRST_PACK_TICKETS, payload });
export const getAllPackTickets = (payload) => ({ type: GET_ALL_PACK_TICKETS, payload });
