import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CustomerRoutes from './routes';

const root = createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <CustomerRoutes />
  </BrowserRouter>
);
