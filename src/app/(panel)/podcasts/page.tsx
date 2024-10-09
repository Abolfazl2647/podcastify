import type { Metadata } from 'next';

import PodcastsList from './list';
import ForYou from './forYou';

export const metadata: Metadata = {
    title: 'Podcasts'
};

export default function PodcastsPage() {
    return (
        <div className="podcasts-page-wrapper">
            <h1 className="page-title"> Podcasts </h1>
            <PodcastsList />
            <ForYou />
        </div>
    );
}
