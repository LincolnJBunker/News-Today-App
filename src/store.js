import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/hackerNewsReducer";

export default configureStore({
    reducer: reducer
})

