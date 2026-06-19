import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h2>Order Detail</h2>
      <p>Viewing order ID: {id}</p>
    </>
  );
};

export default OrderDetailPage;
