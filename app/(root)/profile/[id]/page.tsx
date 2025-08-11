import { EmptyState } from '@/components/EmptyState';
import { Header } from '@/components/Header';
import { VideoCard } from '@/components/VideoCard';

import { getAllVideosByUser } from '@/lib/actions/video';
import { redirect } from 'next/navigation';
import React from 'react';

const ProfilePage = async ({ params, searchParams }: ParamsWithSearch) => {
        const { id } = await params;
        const { query, filter } = await searchParams;

        const { user, videos } = await getAllVideosByUser(id, query, filter);

        if (!user) redirect('/sign-in');

        return (
                <div className="wrapper page">
                        <Header
                                subHeader={user.email}
                                title={user.name}
                                userImg={user.image || '/assets/images/dummy.jpg'}
                        />

                        {videos?.length > 0 ? (
                                <>
                                        <p>Your Videos</p>
                                        <section className="video-grid">
                                                {videos.map(({ videos, user }) => (
                                                        <VideoCard
                                                                key={videos?.id}
                                                                {...videos}
                                                                thumbnail={videos?.thumbnailUrl}
                                                                userImg={user?.image || ''}
                                                                username={user?.name || 'Guest'}
                                                        />
                                                ))}
                                        </section>
                                </>
                        ) : (
                                <EmptyState
                                        icon="/assets/icons/video.svg"
                                        title="No videos available"
                                        description="Videos will appear here once you upload them"
                                />
                        )}
                </div>
        );
};

export default ProfilePage;
