import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlayerState, PlayerMode } from './types';

import { RootState } from '@/store/store';
import { FilterProductPick } from '@/api/products/types';

// Define the initial state using that type
const initialState: IPlayerState = {
    isOpen: false,
    mode: PlayerMode.MAX,
    podcastData: null
};

export const PlayerSlice = createSlice({
    name: 'player',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setPlayerOpen: (state) => {
            state.isOpen = true;

            return state;
        },
        setPlayerClose: (state) => {
            state.isOpen = false;

            return state;
        },
        setPlayerData: (state, action: PayloadAction<FilterProductPick>) => {
            const data = action.payload;

            state.isOpen = true;
            state.podcastData = data;

            return state;
        }
    }
});

// TODO: create selector for Player Data

export const { setPlayerOpen, setPlayerClose, setPlayerData } = PlayerSlice.actions;

export const selectPlayerIsOpen = (state: RootState) => state.player.isOpen;
export const selectPlayerData = (state: RootState) => state.player.podcastData;

export default PlayerSlice.reducer;
