'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const VideoCard = ({
        id,
        title,
        thumbnail,
        createdAt,
        userImg,
        username,
        views,
        visibility,
        duration,
}: VideoCardProps) => {
        return (
                <Link href={`/video/${id}`} className="video-card">
                        <Image src={thumbnail} alt="thumbnail" width={320} height={160} className="thumbnail" />
                        <article>
                                <div>
                                        <figure>
                                                <Image
                                                        src={userImg || '/assets/images/dummy.jpg'}
                                                        alt="user"
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full aspect-square"
                                                />
                                                <figcaption>
                                                        <h3>{username}</h3>
                                                        <p>{visibility}</p>
                                                </figcaption>
                                        </figure>
                                        <aside>
                                                <Image
                                                        src={'/assets/icons/eye.svg'}
                                                        alt="views"
                                                        width={16}
                                                        height={16}
                                                />
                                                <span>{views}</span>
                                        </aside>
                                </div>

                                <h2>
                                        {title} -{' '}
                                        {createdAt.toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                        })}
                                </h2>
                        </article>
                        <button onClick={() => {}} className="copy-btn">
                                <Image src={'/assets/icons/link.svg'} alt="copy" width={16} height={16} />
                        </button>
                        {duration && <div className="duration">{Math.ceil(duration / 60)} mins</div>}
                </Link>
        );
};
