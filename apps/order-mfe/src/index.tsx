import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import OrderRoutes from './routes';

const root = createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <OrderRoutes />
  </BrowserRouter>
);
