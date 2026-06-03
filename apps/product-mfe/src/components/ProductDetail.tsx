import { useParams } from 'react-router-dom';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h2>Product Detail</h2>
      <p>Viewing product ID: {id}</p>
      <p>TODO: Migrate detail view from monolith's product component.</p>
    </>
  );
}
