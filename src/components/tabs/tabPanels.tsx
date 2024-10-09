import { useTabsContext } from './tabContext';

export default function TabPanels({ children }: { children: React.ReactNode[] }) {
    const { activeIndex } = useTabsContext();
    return <div className="panel-wrapper p-4">{children[activeIndex]}</div>;
}
