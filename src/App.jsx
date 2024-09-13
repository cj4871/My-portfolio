import { Outlet } from 'react-router-dom'
import NavLinks from './components/NavLinks'

function App() {

  return (
    <>
      <NavLinks />
      <Outlet />
    </>
  );
}

export default App
