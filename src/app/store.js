import { configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import profileReducer from '../features/profile/profileSlice'
import { persistReducer } from 'redux-persist';
import {combineReducers} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const reducers = combineReducers({
    counter: counterReducer,
    profile:profileReducer
});
const persistConfig = {
    key: 'root',
    storage:AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
