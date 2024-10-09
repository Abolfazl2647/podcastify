import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile } from './types';

import { RootState } from '@/store/store';

// Define a type for the slice state

export interface IGlobalState {
    profile: Profile;
}

// Define the initial state using that type
const initialState: IGlobalState = {
    profile: {
        id: 0,
        firstName: '',
        lastName: '',
        photo: ''
    }
};

export const globalSlice = createSlice({
    name: 'global',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setOperatorProfile: (state, action: PayloadAction<Profile>) => {
            state.profile = action.payload;
        }
    }
});

export const { setOperatorProfile } = globalSlice.actions;

export const selectUserProfile = (state: RootState) => state.global.profile;

export default globalSlice.reducer;
