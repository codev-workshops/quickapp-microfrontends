import { Route, Routes } from 'react-router-dom';
import { IdentityList } from './components/IdentityList';
import { IdentityDetail } from './components/IdentityDetail';

export default function IdentityRoutes() {
  return (
    <Routes>
      <Route index element={<IdentityList />} />
      <Route path=":id" element={<IdentityDetail />} />
    </Routes>
  );
}
