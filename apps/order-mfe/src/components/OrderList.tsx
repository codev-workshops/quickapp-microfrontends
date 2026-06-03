import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function OrderList() {
  const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    // TODO: Inject HttpClient and call the order microservice API
    setItems([
      { id: 1, name: 'Sample Order 1' },
      { id: 2, name: 'Sample Order 2' },
    ]);
  }, []);

  return (
    <>
      <h2>Order List</h2>
      <p>This micro-frontend was extracted from the monolith's order module.</p>
      <p>TODO: Migrate list logic from monolith's order component.</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
