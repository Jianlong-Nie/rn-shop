
const initState = { 
   currentUser:undefined,
 };
export default {
  namespace: 'user',
  state: initState,
  reducers: {
    loginSuccess(state, { payload }) {
        return {
            ...state,
            ...payload
        };
    },
  },
  effects: {
    * login({ payload}, { call, put, select }) {
       
    },

   
  },
};
