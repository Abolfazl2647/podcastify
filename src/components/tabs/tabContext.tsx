import { useState, createContext, useContext } from 'react';
import { ITabContext } from './types';

const TabContext = createContext<ITabContext>({} as ITabContext);

export function TabContextProvider({ children }: { children: React.ReactNode }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
            {children}
        </TabContext.Provider>
    );
}

export function useTabsContext() {
    return useContext(TabContext);
}
