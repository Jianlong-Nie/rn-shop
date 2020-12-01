// import { Toast } from '@ant-design/react-native';
// import I18n from 'hc-rn-i18n';
// import { isCN } from '../../utils';
import { getHomeData } from '../../network/api';

const initState = { 
    refreshing:false,
    listData:[],
    modalVisible:false,
    reportID:''
 };
export default {
  namespace: 'home',
  state: initState,
  reducers: {
   setHomeData(state, { payload }) {
    return {
        ...state,
        listData:payload
    };},
    setRefreshing(state, { payload }) {
        return {
            ...state,
            refreshing:payload
        };},
  },
  effects: {
    * homeData({ payload: {limit = 10, skip=0 } }, {call, put, select }) {
          yield put({type:'setRefreshing',payload:true});
          const currentData = yield call(getHomeData,{limit,skip});
          const preData = yield select(state => state.home.listData);
          yield put({type:'setRefreshing',payload:false});
          yield put({type:'setHomeData',payload:skip===0?currentData:preData.concat(currentData)});
    },
    * onFetch({ payload:{page = 0, startFetch, abortFetch} }, {call, put, select }) {
        try {
            let pageLimit = 10;
            const skip = (page - 1) * pageLimit;
      
            //Generate dummy data
            const currentData = yield call(getHomeData,{pageLimit,skip });
            const preData = yield select(state => state.home.listData);
      
            let rowData = [];
            // //Simulate the end of the list if there is no more data returned from the server
            if (page === 0) {
              rowData = currentData;
            }else {
              rowData = preData.concat(currentData);
            }
      
            // //Simulate the network loading in ES7 syntax (async/await)
            // await this.sleep(2000);
            startFetch(rowData, pageLimit);
          } catch (err) {
            abortFetch(); //manually stop the refresh or pagination if it encounters network error
          }
  },
  },
};
