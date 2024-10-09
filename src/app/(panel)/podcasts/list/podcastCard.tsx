import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import { FilterProductPick } from '@/api/products/types';
import { useAppDispatch } from '@/hooks/useRedux';
import { setPlayerData } from '@/store/slices/player';

interface IPodcastCard {
    className: string;
    data: FilterProductPick;
}

export default function PodcastCard({ data, className }: IPodcastCard) {
    const dispatch = useAppDispatch();
    const { title, warrantyInformation, description, thumbnail } = data;

    const handleClick = () => dispatch(setPlayerData(data));

    return (
        <div
            className={twMerge(
                'podcast-card-wrapper overflow-hidden min-h-20 p-4 bg-background rounded-lg',
                className
            )}
            onClick={handleClick}
        >
            <div className="podcast-content relative flex flex-row circel">
                <div className="thumbnail min-w-24 min-h-24 relative z-10">
                    <Image alt="thumbnail of product" height={96} src={thumbnail} width={96} />
                </div>
                <div className="info flex flex-col relative z-10">
                    <span className="title text-lg text-white font-bold">{title}</span>
                    <span className="warranty text-sm text-slate-300 mt-1">
                        {warrantyInformation}
                    </span>
                    <span className="description text-xs text-slate-300 mt-4">{description}</span>
                </div>
            </div>
        </div>
    );
}
