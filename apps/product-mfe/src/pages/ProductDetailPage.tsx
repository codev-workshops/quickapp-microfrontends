import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h2>Product Detail</h2>
      <p>Viewing product ID: {id}</p>
    </>
  );
};

export default ProductDetailPage;
