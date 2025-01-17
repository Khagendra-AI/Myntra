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
  splashtoken:'',
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
      // console.log('watchlist-->', data);
      let noteIndex=-1
       noteIndex = state.watchlistdata.findIndex((ele:any) => ele.id === data);
       console.log(noteIndex,"indexnote")
      if(noteIndex==-1){
      state.watchlistdata.push(data);
      }
      console.log(state.watchlistdata, 'data addded');
    },
    removeWatchlist: (state: any, action) => {
      const data = action.payload;
      console.log(data, 'datadatadatadatadata');
      // state.watchlistdata.pop(data);
      const arr = state.watchlistdata.filter((ele:any, index:any) => ele.id !== data);
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
      let arr=[]
       arr = state.products.filter((ele:any, index:Number) => index !== data);
      state.products = arr;
      console.log(state.products, 'deleted');
    },
    emptyBag:(state:any,action)=>{
      state.products=[]
      state.totaldiscountedPrice=0
      state.totalPrice=0
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
    removePrice: (state: any, action) => {
      console.log('chljaycyuftdse6sduyfc');
      const data = action.payload;
      state.totalPrice -= data;
      // console.log(state.totalPrice,"price")
    },
    removediscountedPrice: (state: any, action) => {
      const data = action.payload;
      state.totaldiscountedPrice -= data;
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
      state.totalPrice=data.price;
      state.totaldiscountedPrice=data.disprice
      
    },
    removeUserData: (state, action) => {
      const data = action.payload;
      // console.log(data, '+++');
      state.userDetail = "";
      // console.log(data.favourites,"favourites")
      state.watchlistdata=[];
      state.products=[];
      state.totalPrice=0;
      state.totaldiscountedPrice=0;
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
  emptyBag,
  removePrice,
  removediscountedPrice,
} = configSlice.actions;

export default configSlice.reducer;
