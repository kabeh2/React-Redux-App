import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchDataRequest = () => {
  return {
    type: actionTypes.FETCH_DATA_REQUEST
  };
};

export const fetchDataSuccess = data => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data
  };
};

export const fetchDataError = error => {
  return {
    type: actionTypes.FETCH_DATA_ERROR,
    payload: error
  };
};

export const prevPage = () => {
  return {
    type: actionTypes.PREV_PAGE
  };
};

export const nextPage = () => {
  return {
    type: actionTypes.NEXT_PAGE
  };
};

export const fetchData = () => {
  return (dispatch, getState) => {
    dispatch(fetchDataRequest());
    const pageNumber = getState().page;
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=${pageNumber}&sparkline=false`
      )
      .then(response => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchDataError(errorMsg));
      });
  };
};
