import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';

const Home = () => (
    <Layout title="dd-Growth" description="Home">
        <Hero />
        <Services />
    </Layout>
);

export default Home;
