import { EmptyState } from '@/components/EmptyState';
import { Header } from '@/components/Header';
import { VideoCard } from '@/components/VideoCard';

import { getAllVideos } from '@/lib/actions/video';
import React from 'react';

const Page = async ({ searchParams }: SearchParams) => {
        const { query, filter, page } = await searchParams;
        const { videos, pagination } = await getAllVideos(query, filter, Number(page) || 1);

        return (
                <div className="wrapper page">
                        <Header title="All Videos" subHeader="Public Library" />

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
                                        title="No videos founds"
                                        description="Try adjusting your search"
                                />
                        )}
                </div>
        );
};

export default Page;
