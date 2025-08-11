import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainContent = styled.main`
  /* The min-height will be handled by the page components */
`;

const Layout = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;
