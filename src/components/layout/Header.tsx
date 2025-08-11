import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: transparent;
  padding: 20px 40px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const Nav = styled.nav`
  a {
    margin: 0 20px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: #fff;
      transition: width .2s ease-in-out;
    }

    &:hover:after {
      width: 100%;
      left: 0;
      background-color: #fff;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo to="/">پاف چوبی</Logo>
      <Nav>
        <Link to="/">صفحه اصلی</Link>
        <Link to="/products">محصولات</Link>
        <Link to="/about">درباره ما</Link>
        <Link to="/contact">تماس با ما</Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
