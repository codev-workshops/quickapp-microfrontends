import { Route, Routes } from 'react-router-dom';
import { OrderList } from './components/OrderList';
import { OrderDetail } from './components/OrderDetail';

export default function OrderRoutes() {
  return (
    <Routes>
      <Route index element={<OrderList />} />
      <Route path=":id" element={<OrderDetail />} />
    </Routes>
  );
}
