// import { Toast } from '@ant-design/react-native';
// import I18n from 'hc-rn-i18n';
// import { isCN } from '../../utils';



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
