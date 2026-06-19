import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CustomerListPage: React.FC = () => {
  const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    // TODO: Replace with API call
    setItems([
      { id: 1, name: 'Sample Customer 1' },
      { id: 2, name: 'Sample Customer 2' },
    ]);
  }, []);

  return (
    <>
      <h2>Customer List</h2>
      <p>This micro-frontend was extracted from the monolith's customer module.</p>
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

export default CustomerListPage;
