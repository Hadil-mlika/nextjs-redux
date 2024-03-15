//store is composed of the entire application's state

import cartSlice from "./slices/cartSlice";


const { configureStore } = require("@reduxjs/toolkit");

//store => multiple slices

//1) create a store 

const store = configureStore({

    reducer: {

        cart: cartSlice,

    }
})
export default store



////connect the store to the app through the provider 