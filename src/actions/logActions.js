import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from "./types";

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();
//     const res = await fetch("/logs");
//     const data = await res.json();
//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

//get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

//Add Log
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

//delete logs from server
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs/${id}`, {
      method: "POST"
    });
    const data = await res.json();
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};
//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
