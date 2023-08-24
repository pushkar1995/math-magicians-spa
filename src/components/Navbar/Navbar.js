import { Link } from 'react-router-dom';
import './Navbar.css';

function NavigationBar() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link className="links" to="/">
            {' '}
            Home
            {' '}
          </Link>
        </li>
        <li>
          <Link className="links" to="/calculator">
            {' '}
            Calculator
            {' '}
          </Link>
        </li>
        <li>
          <Link className="links" to="/quotes">
            {' '}
            Quotes
            {' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
