import { FilterProductPick } from '@/api/products/types';

export enum PlayerMode {
    MIN = 'MINIMUM',
    MAX = 'MAXIMUM'
}
export interface IPlayerState {
    isOpen: boolean;
    mode: PlayerMode;
    podcastData: FilterProductPick | null;
}
