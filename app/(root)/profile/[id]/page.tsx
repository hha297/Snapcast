import { Header } from '@/components/Header';
import React from 'react';

const ProfilePage = ({ params }: ParamsWithSearch) => {
        return (
                <div className="wrapper page">
                        <Header subHeader="ha.dh290702@gmail.com" title="Hoang Ha" userImg="/assets/images/dummy.jpg" />
                </div>
        );
};

export default ProfilePage;
