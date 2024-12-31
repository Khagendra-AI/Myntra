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
  count: 0,
  products: [],
  walletBalance: 0,
  watchlistdata: [],
  token: '',
  userDetail: {},
  totalPrice: 0,
  totaldiscountedPrice: 0,
};
const configSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    addWatchlist: (state: any, action) => {
      const data: any = action.payload;
      console.log('watchlist-->', data);

      state.watchlistdata.push(data);
      console.log(state.watchlistdata, 'data addded');
    },
    removeWatchlist: (state: any, action) => {
      const data = action.payload;
      console.log(data, 'datadatadatadatadata');
      // state.watchlistdata.pop(data);
      const arr = state.watchlistdata.filter((ele, index) => index !== data);
      console.log(arr, 'arrarrarr');

      state.watchlistdata = arr;
      console.log(state.watchlistdata, 'deleted');
    },
    addToBag: (state: any, action) => {
      const data: any = action.payload;

      // console.log(action.payload,"data1")
      // state.products=[]
      state.products.push(data);
      console.log(state.products, 'data addded');
    },
    removeFromBag: (state: any, action) => {
      const data = action.payload;
      const arr = state.products.filter((ele, index) => index !== data);
      state.products = arr;
      console.log(state.products, 'deleted');
    },
    addPrice: (state: any, action) => {
      console.log('chljaycyuftdse6sduyfc');
      const data = action.payload;
      state.totalPrice += data;
      // console.log(state.totalPrice,"price")
    },
    adddiscountedPrice: (state: any, action) => {
      const data = action.payload;
      state.totaldiscountedPrice += data;
    },
    // // addLoginData: (state, action) => {
    // //   const data = action.payload;
    // //   state.userphone = data.phone;
    // //   state.useremail = data.email;
    // //   state.username = data.name;

    // // },
    addLoginToken: (state, action) => {
      console.log('chl gyaa how');
      const data = action.payload;
      console.log(data, '+++');
      state.token = data;
    },
    addUserData: (state, action) => {
      const data = action.payload;
      console.log(data, '+++');
      state.userDetail = data;
      // console.log(data.favourites,"favourites")
      state.watchlistdata=data.favourites;
      state.products=data.cart;
      
    },
    removeUserData: (state, action) => {
      const data = action.payload;
      // console.log(data, '+++');
      state.userDetail = "";
      // console.log(data.favourites,"favourites")
      state.watchlistdata=[];
      state.products=[];
    },
    removeLoginToken: (state, action) => {
      console.log('chl gyaa how');
      const data = action.payload;
      console.log(data, '+++');
      state.token = data;
    },
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
  addPrice,
  adddiscountedPrice,
  addUserData,
  addLoginToken,
  removeLoginToken,
  removeUserData,
} = configSlice.actions;

export default configSlice.reducer;
