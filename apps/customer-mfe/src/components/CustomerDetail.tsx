import { useParams } from 'react-router-dom';

export function CustomerDetail() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h2>Customer Detail</h2>
      <p>Viewing customer ID: {id}</p>
      <p>TODO: Migrate detail view from monolith's customer component.</p>
    </>
  );
}
