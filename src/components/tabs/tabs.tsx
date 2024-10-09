import { TabContextProvider } from './tabContext';

export default function Tabs({ children }: { children: React.ReactNode }) {
    return <TabContextProvider>{children}</TabContextProvider>;
}
