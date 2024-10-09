import type { Metadata } from 'next';

import BooksList from './list';

export const metadata: Metadata = {
    title: 'Books'
};

// We can create [bookId] folder for nested route to have give each books seprate page

export default function Books() {
    return (
        <div className="podcasts-page-wrapper">
            <h1 className="page-title"> Books </h1>
            <div className="p-8 flex flex-col">
                <BooksList />
            </div>
        </div>
    );
}
