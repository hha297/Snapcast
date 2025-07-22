'use client';

import Image from 'next/image';
import { useState } from 'react';

export const DropdownList = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
                <div className="relative">
                        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                <div className="filter-trigger">
                                        <figure>
                                                <Image
                                                        src="/assets/icons/hamburger.svg"
                                                        alt="menu"
                                                        width={16}
                                                        height={16}
                                                />
                                                Most Recent
                                        </figure>
                                        <Image
                                                src="/assets/icons/arrow-down.svg"
                                                alt="arrow down"
                                                width={16}
                                                height={16}
                                        />
                                </div>
                        </div>
                        {isOpen && (
                                <ul className="dropdown">
                                        {['Most Recent', 'Most Viewed', 'Most Liked'].map((item) => (
                                                <li key={item} className="list-item">
                                                        {item}
                                                </li>
                                        ))}
                                </ul>
                        )}
                </div>
        );
};
