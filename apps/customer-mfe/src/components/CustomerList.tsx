import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CustomerList() {
  const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    // TODO: Inject HttpClient and call the customer microservice API
    setItems([
      { id: 1, name: 'Sample Customer 1' },
      { id: 2, name: 'Sample Customer 2' },
    ]);
  }, []);

  return (
    <>
      <h2>Customer List</h2>
      <p>This micro-frontend was extracted from the monolith's customer module.</p>
      <p>TODO: Migrate list logic from monolith's customer component.</p>
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
