import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseItems from '../Advertise/AdvertiseItems';
import Categories from '../Categories/Categories';
import FeedBack from '../Feedback/FeedBack';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    const { data: advertiseProducts = [] } = useQuery({
        queryKey: ['advertiseProducts'],
        queryFn: () => fetch(`http://localhost:5000/advertiseProducts`)
            .then(res => res.json())
    })
    console.log(advertiseProducts)
    return (
        <div>
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