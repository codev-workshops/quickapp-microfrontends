import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function ProductList() {
  const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    // TODO: Inject HttpClient and call the product microservice API
    setItems([
      { id: 1, name: 'Sample Product 1' },
      { id: 2, name: 'Sample Product 2' },
    ]);
  }, []);

  return (
    <>
      <h2>Product List</h2>
      <p>This micro-frontend was extracted from the monolith's product module.</p>
      <p>TODO: Migrate list logic from monolith's product component.</p>
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
