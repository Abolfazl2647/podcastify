import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import { FilterProductPick } from '@/api/products/types';
import { useAppDispatch } from '@/hooks/useRedux';
import { setPlayerData } from '@/store/slices/player';

interface IForYou {
    className: string;
    data: FilterProductPick;
}

export default function ForYou({ data, className }: IForYou) {
    const dispatch = useAppDispatch();
    const { category, warrantyInformation, thumbnail } = data;

    const handleClick = () => dispatch(setPlayerData(data));

    return (
        <div
            className={twMerge(
                'podcast-card-wrapper min-h-20 p-4 m-3 max-w-40 rounded-lg cursor-pointer',
                className
            )}
            onClick={handleClick}
        >
            <div className="podcast-content relative flex flex-col min-h-48">
                <div className="thumbnail min-w-36 min-h-36 relative z-10">
                    <Image
                        alt="thumbnail of product"
                        className="bg-background"
                        height={144}
                        src={thumbnail}
                        width={144}
                    />
                </div>
                <div className="info flex flex-col relative z-10 grow">
                    <span className="title text-lg text-center text-white font-bold">
                        {category}
                    </span>
                    <span className="warranty text-sm text-slate-300 my-1 text-center mt-1">
                        {warrantyInformation}
                    </span>
                </div>
            </div>
        </div>
    );
}
