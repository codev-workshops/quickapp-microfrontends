import { Route, Routes } from 'react-router-dom';
import { CustomerList } from './components/CustomerList';
import { CustomerDetail } from './components/CustomerDetail';

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route index element={<CustomerList />} />
      <Route path=":id" element={<CustomerDetail />} />
    </Routes>
  );
}
