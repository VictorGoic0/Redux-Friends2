import axiosAuth from "../authenticate";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCESS = "LOGIN_SUCCESS";
export const GET_FRIENDS = 'GET_FRIENDS';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosAuth()
  .post('http://localhost:5000/api/login', creds)
  .then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: LOGIN_SUCESS, payload: res.data.payload });
    console.log(res);
  })
  .catch(err => {
    console.log(err)
  })
};

export const getFriends = () => {
  return {
    type: GET_FRIENDS
  }
}
