'use client';

import { motion, AnimatePresence } from 'framer-motion';

import PodcastCard from './podcastCard';

import { useAppSelector } from '@/hooks/useRedux';
import { selectPlayerIsOpen } from '@/store/slices/player';
import { useGetFilteredProducts } from '@/hooks/useProducts';

const spring = {
    type: 'linear'
};

const itemVariants = {
    playerClose: { paddingRight: '16px' },
    playerOpen: { paddingRight: '365px' }, // 365 => means width of player plus 15px for little bit of gap
    transition: { duration: 1.5 }
};

const colorPalette = ['from-red-500', 'from-blue-500', 'from-green-500', 'from-yellow-500'];

export default function PodcastsList() {
    const isOpen = useAppSelector(selectPlayerIsOpen);
    const { data, isPending } = useGetFilteredProducts({
        limit: 4,
        skip: 0,
        select: ['id', 'title', 'warrantyInformation', 'description', 'thumbnail']
    });

    if (isPending && !data) return <p className="p-4">Loading ...</p>;

    return (
        <AnimatePresence>
            <motion.div
                layout
                animate={isOpen ? 'playerOpen' : 'playerClose'}
                className="list-wrapper p-4 w-full min-h-[300px] grid grid-rows-2 grid-cols-2 gap-4 cursor-pointer"
                initial="playerClose"
                transition={spring}
                variants={itemVariants}
            >
                {data?.products.map((product, index) => (
                    <PodcastCard
                        key={product.id}
                        className={`bg-gradient-to-r ${colorPalette[index]}`}
                        data={product}
                    />
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
