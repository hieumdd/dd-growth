import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Tools from '../components/home/Tools';

const Home = () => (
    <Layout title="dd-Growth" description="Home">
        <Hero />
        <Services />
        <Tools />
    </Layout>
);

export default Home;
