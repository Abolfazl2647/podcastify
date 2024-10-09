import Aside from '@/layout/aside';
import Player from '@/modules/player';

export default function PanelLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen" id="root">
            <div className="layout-wrapper relative flex flex-row h-screen gap-4">
                <Aside />
                <div className="h-full w-full flex flex-row pl-80 box-border min-h-0 ">
                    <div className="w-full h-full min-h-full flex flex-row overflow-hidden">
                        <main className="relative min-h-full w-full flex flex-col grow py-4">
                            <div className="w-full h-full bg-foreground rounded-lg">{children}</div>
                            <div id="main-portals" />
                        </main>
                        <Player />
                    </div>
                </div>
            </div>
        </div>
    );
}
