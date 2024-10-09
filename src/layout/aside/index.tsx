import { Card } from '@/components';
import Profile from './partials/profile';
import Menu from './menu';
import Bookmarks from './bookmarks';

export default function Aside() {
    return (
        <aside className="fixed p-4 w-80 h-full flex flex-col min-h-0 gap-4">
            <Card className="min-h-40">
                <Profile />
                <Menu />
            </Card>
            <Card className="grow">
                <Bookmarks />
            </Card>
        </aside>
    );
}
