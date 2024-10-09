'use client';

import ForYouCard from './forYouCard';

import { useGetFilteredProducts } from '@/hooks/useProducts';

export default function ForYou() {
    const { data, isPending } = useGetFilteredProducts({
        limit: 10,
        skip: 0,
        select: ['id', 'title', 'category', 'warrantyInformation', 'description', 'thumbnail']
    });

    if (isPending || !data) return <p className="p-4">Loading ...</p>;

    return (
        <div className="foryou-wrapper flex flex-col z-10 relative">
            <h1 className="text-white font-bold text-3xl py-2 px-8">For You</h1>
            <div className="foryou-content flex flex-row absolute top-8">
                {data?.products.map((product) => (
                    <ForYouCard key={product.id} className={`bg-gradient-to-r`} data={product} />
                ))}
            </div>
        </div>
    );
}
