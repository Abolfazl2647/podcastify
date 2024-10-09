'use client';

import { MenuList } from '@/config/menu';
import { ListItem } from '@/components';
import { usePathname } from 'next/navigation';

export default function Menu() {
    const pathname = usePathname();

    return (
        <div className="menu-wrapper flex flex-col p-2 pb-4">
            {MenuList.map((item, index) => {
                const { id, href } = item;
                return <ListItem key={id} {...item} active={pathname === href} />;
            })}
        </div>
    );
}
