import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 20px;
  text-align: right; /* Farsi text alignment */
`;

const ProductName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #777;
  margin: 0;
`;

export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardWrapper>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductInfo>
    </CardWrapper>
  );
};

export default ProductCard;
