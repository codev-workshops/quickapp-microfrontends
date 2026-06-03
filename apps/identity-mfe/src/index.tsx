import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import IdentityRoutes from './routes';

const root = createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <IdentityRoutes />
  </BrowserRouter>
);
