import { configureStore } from '@reduxjs/toolkit';

import global from './slices/global';
import player from './slices/player';
import modal from './slices/modal';

export const makeStore = () => {
    return configureStore({
        reducer: { global, player, modal }
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
