import React from 'react';
import Head from 'next/head';

// import favicon from '../static/icons/profile_nord.svg';

export type SEOProps = {
    title: string;
    description: string;
};

const SEO = ({ title, description }: SEOProps) => {
    return (
        <Head>
            <title>{title}</title>
            {/* <link rel="icon" href={favicon} /> */}
        </Head>
    );
};

export default SEO;
