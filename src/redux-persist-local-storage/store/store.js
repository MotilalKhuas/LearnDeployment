
import countReducer from "../counter/counterRedux";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key : "root",
    storage : localStorage,
    blacklist : ["counter"]
}

const rootReducer = combineReducers({
    cart : cartReducer,
    counter : countReducer,
    product : productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
})

export const persistor = persistStore(store);
export default store;