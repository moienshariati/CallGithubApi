import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #222;
  color: #aaa;
  padding: 50px 40px;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-bottom: 20px;
  a {
    margin: 0 15px;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ccc;
    }
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinks>
        {/* Using placeholders for now, will need to add a font-awesome or similar library for icons */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()} فروشگاه پاف چوبی. تمام حقوق محفوظ است.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
