import React, { ReactNode } from 'react';
import { Container, VStack, Divider } from '@chakra-ui/layout';

import Header from './Header';
import Footer from './Footer';
import SEO, { SEOProps } from './SEO';
// import ScrollToTop from './ScrollToTop';

type LayoutProps = SEOProps & { children: ReactNode };

const Layout = ({ title, description, children }: LayoutProps) => (
    <>
        <SEO title={title} description={description} />
        <Header />
        <Container
            as={VStack}
            py='8rem'
            alignItems="stretch"
            spacing="4rem"
            divider={<Divider />}
        >
            {children}
        </Container>
        {/* <ScrollToTop /> */}
        {/* <Footer /> */}
    </>
);

export default Layout;
