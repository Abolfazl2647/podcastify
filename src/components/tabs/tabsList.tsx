import { createContext, useContext } from 'react';

import { ITabListContext } from './types';
import { twMerge } from 'tailwind-merge';

const TabListContext = createContext<ITabListContext>({} as ITabListContext);

export function useTabListContext() {
    return useContext(TabListContext);
}

export default function TabsList({
    children,
    className
}: {
    children: React.ReactNode[];
    className?: string;
}) {
    return (
        <div className={twMerge('tablist-wrapper w-full flex flex-row p-2', className)}>
            {children &&
                children.map((child, index) => (
                    <TabListContext.Provider key={index} value={{ index }}>
                        {child}
                    </TabListContext.Provider>
                ))}
        </div>
    );
}
