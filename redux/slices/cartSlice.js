// slice is made up with 3 steps 

const { createSlice } = require("@reduxjs/toolkit");

/**
 * 1) create a slice 
 * 2) create initial state
 * 3) create reducers 
 * 4) export the slice reducers
 * 5) export the slice reducer
 */

const initialState=[
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        
       
        "qty":1
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        
       
       "qty":1
    }
]



const cartSlice =createSlice({
    name:"cart",
    initialState,


    //functions to use to manipulate the state 
    reducers:{
        addToCart:((state, action)=>{


        }),

        removeFromCart:((state,action)=>{

        }),

        incrementQty:((state, action)=>{

        }),

        decrementQty:((state,action)=>{

        })

    }
})

export const {addToCart,removeFromCart,incrementQty,decrementQty}=cartSlice.actions
export default cartSlice