import { VideoDetailHeader } from '@/components/VideoDetailHeader';
import { VideoPlayer } from '@/components/VideoPlayer';
import { getVideoById } from '@/lib/actions/video';
import { redirect } from 'next/navigation';
import React from 'react';

const VideoPage = async ({ params }: Params) => {
        const { videoId } = await params;
        const { user, videos } = await getVideoById(videoId);

        if (!videos) {
                redirect('/404');
        }
        return (
                <main className="wrapper page">
                        <VideoDetailHeader
                                {...videos}
                                userImg={user?.image}
                                username={user?.name}
                                ownerId={videos.userId}
                                videoId={videoId}
                        />
                        <section className="video-details">
                                <div className="content">
                                        <VideoPlayer videoId={videos.videoId} />
                                </div>
                        </section>
                </main>
        );
};

export default VideoPage;
