import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Footer: FunctionComponent = () => {
  const year = new Date();

  return (
    <div className="footer">
      <div className="copyright">LorenzO&apos;tickets &copy; {year.getFullYear()}</div>
      <nav className="nav-footer">
        <Link to="/cgu">CGU</Link>
        <Link to="/mentions-legales">Mentions légales</Link>
      </nav>
    </div>
  );
};

export default Footer;
