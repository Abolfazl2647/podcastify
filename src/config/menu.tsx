import { Microphone2, Category2, SearchNormal, Book, Login } from '@/icons';

export const MenuList = [
    { id: 0, text: 'Podcasts', icon: <Microphone2 />, href: '/podcasts' },
    { id: 1, text: 'Books', icon: <Book />, href: '/books' },
    { id: 2, text: 'Categories', icon: <Category2 />, href: '/categories' },
    { id: 3, text: 'Search', icon: <SearchNormal />, href: '/search' },
    { id: 4, text: 'Sign In', icon: <Login />, href: '/' }
];
