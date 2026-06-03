import { Route, Routes } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';

export default function ProductRoutes() {
  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path=":id" element={<ProductDetail />} />
    </Routes>
  );
}
