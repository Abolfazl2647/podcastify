import { Dispatch, SetStateAction } from 'react';

export interface ITabContext {
    setActiveIndex: Dispatch<SetStateAction<number>>;
    activeIndex: number;
}

export interface ITabListContext {
    index: number;
}
