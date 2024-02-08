import React from 'react'
import { RankTypes } from '@/types'

const colorClasses: { [key: string]: string } = {
    red: 'bg-red-500',
    pink: 'bg-pink-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    copper: 'bg-yellow-500',
    silver: 'bg-gray-300',
    gold: 'bg-yellow-300',
};

const Rank = ({ bgColor }: RankTypes) => {
    const colorClass = colorClasses[bgColor] || 'bg-red-500'; // default to red if no match

    return <div className={`${colorClass} w-[10rem] h-[3rem]`}>
        <span className="text-lightgray">{bgColor}</span>
    </div>;
};

export default Rank
