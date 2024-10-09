'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { CloseCircle } from '@/icons';
import { selectPlayerIsOpen, selectPlayerData, setPlayerClose } from '@/store/slices/player';

const spring = {
    type: 'linear',
    stiffness: 600,
    damping: 30
};

const itemVariants = {
    hidden: { right: -600 },
    visible: { right: 0 },
    transition: { duration: 1.5 }
};

export default function Player() {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(selectPlayerIsOpen);
    const playerData = useAppSelector(selectPlayerData);

    const handleClosePlayer = () => dispatch(setPlayerClose());

    return (
        <AnimatePresence>
            <motion.div
                layout
                animate={isOpen ? 'visible' : 'hidden'}
                className="min-w-[350px] w-[350px] h-full flex flex-col fixed z-20 top-0 bg-black"
                initial="hidden"
                transition={spring}
                variants={itemVariants}
            >
                <div className="player-header flex flex-row items-center  p-2">
                    <button className="w-8 h-8" onClick={handleClosePlayer}>
                        <CloseCircle className="w-6 h-6 " />
                    </button>
                    <h1>{playerData?.title}</h1>
                </div>
                <div className="player-content">
                    <Image alt="player placeholder" height={700} src="/player.png" width={350} />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
