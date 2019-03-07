import { GET_FRIENDS } from '../actions';
import axiosAuth from '../authenticate/';

const initialState = {
  friends: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
    axiosAuth().get('http://localhost:5000/api/friends')
    .then(res => {
      console.log(res)
      console.log(state)
      return {
        ...state,
        friends: res.data
      }
    })
    .catch(err => {
      console.log(err)
    })

    default:
      return state;
  }
};

export default reducer
