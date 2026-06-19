import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductListPage: React.FC = () => {
  const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    // TODO: Replace with API call
    setItems([
      { id: 1, name: 'Sample Product 1' },
      { id: 2, name: 'Sample Product 2' },
    ]);
  }, []);

  return (
    <>
      <h2>Product List</h2>
      <p>This micro-frontend was extracted from the monolith's product module.</p>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductListPage;
