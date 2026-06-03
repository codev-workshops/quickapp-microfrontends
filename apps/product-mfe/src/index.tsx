import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ProductRoutes from './routes';

const root = createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <ProductRoutes />
  </BrowserRouter>
);
