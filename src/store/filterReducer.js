const initialState = {
  allChecked: true,
  withoutChecked: true,
  oneChecked: true,
  twoChecked: true,
  threeChecked: true,
};
const FILTER_CHANGE = 'FILTER_CHANGE';

function filterReducer(state = initialState, action) {
  const changeProp = (prop) => {
    const changePropState = { ...state, [prop]: !state[prop] };
    const all = changePropState.allChecked;
    const without = changePropState.withoutChecked;
    const one = changePropState.oneChecked;
    const two = changePropState.twoChecked;
    const three = changePropState.threeChecked;

    if (prop === 'allChecked' && all) {
      return {
        allChecked: true,
        withoutChecked: true,
        oneChecked: true,
        twoChecked: true,
        threeChecked: true,
      };
    }
    if (prop === 'allChecked' && !all) {
      return {
        allChecked: false,
        withoutChecked: false,
        oneChecked: false,
        twoChecked: false,
        threeChecked: false,
      };
    }
    if (prop !== 'allChecked' && all) {
      return { ...changePropState, allChecked: !state.allChecked };
    }
    if (prop !== 'allChecked' && !all && without && one && two && three) {
      return { ...changePropState, allChecked: !state.allChecked };
    }
    return changePropState;
  };
  switch (action.type) {
    case FILTER_CHANGE:
      return changeProp(action.payload);

    default:
      return state;
  }
}

export const filterChange = (prop) => ({ type: FILTER_CHANGE, payload: prop });

export default filterReducer;
