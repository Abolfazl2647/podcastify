import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IModalState } from './types';

import { RootState } from '@/store/store';
import { IPostItem } from '@/api/posts/types';

// Define the initial state using that type
const initialState: IModalState = {
    isOpen: false,
    modalData: null
};

export const ModalSlice = createSlice({
    name: 'modal',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setModalOpen: (state) => {
            state.isOpen = true;

            return state;
        },
        setModalClose: (state) => {
            state.isOpen = false;

            return state;
        },
        setModalData: (state, action: PayloadAction<IPostItem>) => {
            const data = action.payload;

            state.isOpen = true;
            state.modalData = data;

            return state;
        }
    }
});

export const { setModalOpen, setModalClose, setModalData } = ModalSlice.actions;

export const selectModalIsOpen = (state: RootState) => state.modal.isOpen;
export const selectModalData = (state: RootState) => state.modal.modalData;

export default ModalSlice.reducer;
