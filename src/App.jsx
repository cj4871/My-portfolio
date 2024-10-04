import { Outlet } from 'react-router-dom'
import NavLinks from './components/NavLinks'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <NavLinks />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
