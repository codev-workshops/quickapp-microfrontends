import React from 'react';
import { useParams } from 'react-router-dom';

const IdentityDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h2>Identity Detail</h2>
      <p>Viewing identity ID: {id}</p>
    </>
  );
};

export default IdentityDetailPage;
