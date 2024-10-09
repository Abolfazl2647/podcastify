import { twMerge } from 'tailwind-merge';
import { useTabsContext } from './tabContext';
import { useTabListContext } from './tabsList';

interface ITab {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export default function Tab({ children, disabled, className }: ITab) {
    const { setActiveIndex, activeIndex } = useTabsContext();
    const { index } = useTabListContext();
    const handleClick = () => setActiveIndex(index);

    return (
        <button
            className={twMerge(
                'mt-4 mx-2 p-1 px-3 bg-gray-500 rounded-lg',
                activeIndex === index ? 'bg-blue-500' : '',
                className
            )}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
