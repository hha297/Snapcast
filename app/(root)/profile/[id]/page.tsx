import { Header } from '@/components/Header';
import { VideoCard } from '@/components/VideoCard';
import { dummyCards } from '@/constants';
import React from 'react';

const ProfilePage = async ({ params }: ParamsWithSearch) => {
        const { id } = await params;
        console.log(id);

        return (
                <div className="wrapper page">
                        <Header subHeader="ha.dh290702@gmail.com" title="Hoang Ha" userImg="/assets/images/dummy.jpg" />
                        <section className="video-grid">
                                {dummyCards.map((card) => (
                                        <VideoCard key={card.id} {...card} />
                                ))}
                        </section>
                </div>
        );
};

export default ProfilePage;
