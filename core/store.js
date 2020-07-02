import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authSlice from './slices/authSlice';

const rootReducer = combineReducers( {
    auth: authSlice
} );

export const store = configureStore( {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware( { serializableCheck: false } )],
} );