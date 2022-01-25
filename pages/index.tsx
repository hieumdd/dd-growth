import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Tools from '../components/home/Tools';
import BigQuery from '../components/home/BigQuery';

const Home = () => (
    <Layout title="dd-Growth" description="Home">
        <Hero />
        <Services />
        <Tools />
        <BigQuery />
    </Layout>
);

export default Home;
