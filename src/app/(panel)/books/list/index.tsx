'use client';

import PostCard from './postCard';
import ModalContent from './modalContent';

import { Modal } from '@/components';
import { useGetAllPosts } from '@/hooks/usePosts';
import { useAppSelector } from '@/hooks/useRedux';
import { selectModalIsOpen } from '@/store/slices/modal';

export default function BooksList() {
    const { data } = useGetAllPosts();

    const modalIsOpen = useAppSelector(selectModalIsOpen);

    return (
        <div className="boks-wrapper grid grid-cols-2 gap-4 cursor-pointer">
            {data?.posts.map((post) => {
                return <PostCard key={post.id} data={post} />;
            })}
            <Modal isOpen={modalIsOpen}>
                <ModalContent />
            </Modal>
        </div>
    );
}
