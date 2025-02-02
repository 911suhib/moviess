import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link className="p-2 text-dark" to="/features">Features</Link>
      <Link className="p-2 text-dark" to="/enterprise">Enterprise</Link>
      <Link className="p-2 text-dark" to="/support">Support</Link>
      <Link className="p-2 text-dark" to="/">Pricing</Link>
    </nav>
  );
}

export default Nav;