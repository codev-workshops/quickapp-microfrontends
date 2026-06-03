import { useParams } from 'react-router-dom';

export function IdentityDetail() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h2>Identity Detail</h2>
      <p>Viewing identity ID: {id}</p>
      <p>TODO: Migrate detail view from monolith's identity component.</p>
    </>
  );
}
