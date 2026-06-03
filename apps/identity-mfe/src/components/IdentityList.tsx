import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function IdentityList() {
  const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    // TODO: Inject HttpClient and call the identity microservice API
    setItems([
      { id: 1, name: 'Sample Identity 1' },
      { id: 2, name: 'Sample Identity 2' },
    ]);
  }, []);

  return (
    <>
      <h2>Identity List</h2>
      <p>This micro-frontend was extracted from the monolith's identity module.</p>
      <p>TODO: Migrate list logic from monolith's identity component.</p>
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
