import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components/templates/layout/layout';
import { HomePage } from './components/pages/homePage/homePage';
import { ProductPage } from './components/pages/productPage/productPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'product/:productId',
    element: <ProductPage />,
  },
]);

function App() {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
}

export default App;
