import React from 'react'
import { RankTypes } from '@/types'

const colorClasses: { [key: string]: string } = {
    Red: 'bg-red-500',
    Pink: 'bg-pink-500',
    Green: 'bg-green-700',
    Blue: 'bg-blue-500',
    Copper: 'bg-yellow-500',
    Silver: 'bg-gray-300',
    Gold: 'bg-yellow-300',
};

const Rank = ({ bgColor }: RankTypes) => {
    const colorClass = colorClasses[bgColor] || 'bg-red-500'; // default to red if no match

    return <div className={`${colorClass} w-[10rem] h-[3rem] flex items-center justify-center rounded-2xl`}>
        <span className="text-white font-bold">{bgColor}</span>
    </div>;
};

export default Rank
