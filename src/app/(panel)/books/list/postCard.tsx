import { IPostItem } from '@/api/posts/types';
import { useAppDispatch } from '@/hooks/useRedux';
import { setModalOpen } from '@/store/slices/modal';

interface IPostCard {
    data: IPostItem;
}

export default function PostCard(props: IPostCard) {
    const dispatch = useAppDispatch();
    const { title } = props.data;

    const handleClick = () => dispatch(setModalOpen());

    return (
        <div className="post-card-wrapoper" onClick={handleClick}>
            {title}
        </div>
    );
}
