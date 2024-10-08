import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import Home from './pages/Home'
import Porfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import HandleErrorPage from './pages/HandleErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <HandleErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
      {
        path: 'Portfolio',
        element: <Porfolio />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />

);