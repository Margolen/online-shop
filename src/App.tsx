import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
  return <RouterProvider router={router} />;
}

export default App;
