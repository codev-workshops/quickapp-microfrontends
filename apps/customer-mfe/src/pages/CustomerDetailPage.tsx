import React from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h2>Customer Detail</h2>
      <p>Viewing customer ID: {id}</p>
    </>
  );
};

export default CustomerDetailPage;
