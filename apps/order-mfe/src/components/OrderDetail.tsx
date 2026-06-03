import { useParams } from 'react-router-dom';

export function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h2>Order Detail</h2>
      <p>Viewing order ID: {id}</p>
      <p>TODO: Migrate detail view from monolith's order component.</p>
    </>
  );
}
