import { motion, AnimatePresence } from 'framer-motion';

import { selectModalData, setModalClose } from '@/store/slices/modal';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { selectPlayerIsOpen, setPlayerClose } from '@/store/slices/player';
import { CloseCircle } from '@/icons';
import { setPlayerOpen } from '@/store/slices/player';

const spring = {
    type: 'spring',
    stiffness: 600,
    damping: 30
};

const itemVariants = {
    playerClose: { paddingRight: '16px' },
    playerOpen: { paddingRight: '365px' }, // 365 => means width of player plus 15px for little bit of gap
    transition: { duration: 1 }
};

export default function ModalContent() {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(selectPlayerIsOpen);
    const modalData = useAppSelector(selectModalData);

    const handleCloseModal = () => {
        dispatch(setModalClose());
        dispatch(setPlayerClose());
    };

    const handleOpenPlayer = () => dispatch(setPlayerOpen());

    return (
        <AnimatePresence>
            <motion.div
                layout
                animate={isOpen ? 'playerOpen' : 'playerClose'}
                className="w-full h-full bg-background"
                initial="playerClose"
                transition={spring}
                variants={itemVariants}
            >
                <div className="modal-header flex flex-row items-center  p-2">
                    <button className="w-8 h-8" onClick={handleCloseModal}>
                        <CloseCircle className="w-6 h-6 " />
                    </button>
                    <h1>{modalData?.title}</h1>
                </div>
                <div className="modal-body flex flex-row justify-between">
                    <button onClick={handleOpenPlayer}>To bring the Player just click Here</button>
                    <span> &#x1F9E1; </span>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
