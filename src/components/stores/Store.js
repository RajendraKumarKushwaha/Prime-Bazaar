import { configureStore } from "@reduxjs/toolkit";
import cartSlicers from "../slicers/cartSlicers";

export default configureStore({
    reducer:{
        store: cartSlicers
    }
})