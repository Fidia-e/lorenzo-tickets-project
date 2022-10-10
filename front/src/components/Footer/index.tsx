import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Footer: FunctionComponent = () => {
  return (
    <div className="footer">
      <span>LorenzO&apos;tickets &copy;</span>
      <nav className="nav-footer">
        <Link to="/cgu">CGU</Link>
        <Link to="/mentions-legales">Mentions légales</Link>
      </nav>
    </div>
  );
};

export default Footer;
