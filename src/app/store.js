import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/couterSlice";
import userReducer from "../features/Auth/userSlice";

const rootReducer = {
    counters: counterReducer,
    user: userReducer,
};
const store = configureStore({
    reducer: rootReducer,
});

export default store;
