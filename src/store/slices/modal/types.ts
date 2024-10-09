import { IPostItem } from '@/api/posts/types';

export interface IModalState {
    isOpen: boolean;
    modalData: IPostItem | null;
}
