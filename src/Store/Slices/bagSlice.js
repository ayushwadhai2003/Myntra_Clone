import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: "bag",
    initialState: {
        bagItems: [],
        loading: false,
        error: false,
        noOfItemsInBag: 0
    },
    reducers: {
        addItemToBag: (state, action) => {
            //this action will add item oin the cart
            // eventually in the bagItems array in bag slice

            // State will contain initialState
            // Action will be an object which will have type and payload and payload parameters

            state.bagItems.push(action.payload)
            state.noOfItemsInBag++
        },
        removeItemFormBag: () => {
            // this action will remove items from the cart
            // eventually remove value from bagItems arry in bag slice 
        },
    }
})

export const { addItemToBag, removeItemFormBag } = bagSlice.actions

export default bagSlice.reducer