import React from 'react';
import Categories from '../Categories/Categories';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Categories></Categories>
        </div>
    );
};

export default Home;