import {createSlice} from '@reduxjs/toolkit';
// import {getProductsAction} from './configAction';
interface ConfigModal {
  isLoading: boolean;
  count: number;
  products?: any;
  matched: boolean;
}
type ActionType = {
  type: string;
  payload: any;
};
let initialState = {
  isLoading: false,
  bag:[],
  count: 0,
  products: [],
  gainersData: [],
  loosersData: [],
  walletBalance: 0,
  watchlistdata: [],
  token: '',
  userDetail: {},
};
const configSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    
    
    addWatchlist: (state: any, action) => {
      const data: any = action.payload;

      state.watchlistdata.push(data);
      console.log(state.watchlistdata, 'data addded');
    },
    removeWatchlist: (state:any, action) => {
      const data = action.payload;

      state.watchlistdata.pop(data);
      console.log(state.watchlistdata, 'deleted');
    },
    addToBag: (state: any, action) => {
      const data: any = action.payload;

      state.bag.push(data)
      console.log(state.bag, 'data addded');
    },
    removeFromBag: (state:any, action) => {
      const data = action.payload;

      state.bag.pop(data);
      console.log(state.bag, 'deleted');
    },
    // // addLoginData: (state, action) => {
    // //   const data = action.payload;
    // //   state.userphone = data.phone;
    // //   state.useremail = data.email;
    // //   state.username = data.name;

    // // },
    // addLoginToken: (state, action) => {
    //   console.log('chl gyaa how');
    //   const data = action.payload;
    //   console.log(data, '+++');
    //   state.token = data;
    // },
    // addUserData: (state, action) => {
    //   const data = action.payload;
    //   console.log(data, '+++');
    //   state.userDetail = data;
    //   // console.log(data.favourites,"favourites")
    //   state.watchlistdata=data.favourites;
    //   state.walletBalance=data.walletBalance || 0;
    // },
    // removeUserData: (state, action) => {
    //   const data = action.payload;
    //   // console.log(data, '+++');
    //   state.userDetail = "";
    //   // console.log(data.favourites,"favourites")
    //   state.watchlistdata=[];
    // },
    // removeLoginToken: (state, action) => {
    //   console.log('chl gyaa how');
    //   const data = action.payload;
    //   console.log(data, '+++');
    //   state.token = data;
    // },
  },
  // extraReducers: builder => {
  //   builder.addCase(getProductsAction.pending, state => {
  //     state.isLoading = true;
  //     //   console.log('in pending')
  //   });
  //   builder.addCase(getProductsAction.fulfilled, (state, action) => {
  //     //  console.log('action', action);
  //     state.isLoading = false;
  //     state.products = action.payload;
  //     //   console.log('data found')
  //   });
  //   builder.addCase(getProductsAction.rejected, state => {
  //     state.isLoading = false;
  //   });

    // builder.addMatcher(
    //   //return condition from this callback function
    //   action => action.type.endsWith('/fulfilled'),
    //   (state, action) => {
    //     state.isLoading = false;
    //     state.matched = true;
    //   },
    // );
    // builder.addDefaultCase((state, action) => {
    //  // console.log('default case', action);
    //   state.isLoading = false;
    // });
  // },
});
// export const {getProducts} = configSlice.selectors;

export const {
  // increaseCount,
  // decreaseCount,
  // SET_CONFIG_DATA,
  // increaseCountByPayload,
  addWatchlist,
  removeWatchlist,
  addToBag,
  removeFromBag,
} = configSlice.actions;

export default configSlice.reducer;
