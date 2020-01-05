import * as actionType from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
  page: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case actionType.FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actionType.PREV_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    case actionType.NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    default:
      return state;
  }
};

export default reducer;
