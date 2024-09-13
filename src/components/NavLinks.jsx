import { Link } from 'react-router-dom';
import Navbar from './NavBar/NavBar';

export default function Nav(links) {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link fs-2" to="/">
                    Home
                </Link>,
                <Link key={2} className="nav-link fs-2" to="/Portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-link fs-2" to="/Resume">
                    Resume
                </Link>,
                <Link key={4} className="nav-link fs-2" to="/Contact" >
                    Contact
                </Link>,
            ]}
        />
    );
}