import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseItems from '../Advertise/AdvertiseItems';
import Categories from '../Categories/Categories';
import FeedBack from '../Feedback/FeedBack';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    const { data: advertiseProducts = [] } = useQuery({
        queryKey: ['advertiseProducts'],
        queryFn: () => fetch(`https://server-murex-nine.vercel.app/advertiseProducts`)
            .then(res => res.json())
    })

    return (
        <div className=''>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
            {
                advertiseProducts.length === 0 ? <></> :
                    <AdvertiseItems advertiseProducts={advertiseProducts}></AdvertiseItems>
            }
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;