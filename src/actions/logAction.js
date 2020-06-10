import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

//从 server 获得 logs 数据
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      types: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//将 loading 设置为 true
export const setLoading = () => {
  return { type: SET_LOADING };
};
