import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import travoltaGif from '../../assets/images/travolta.gif';

const Error404: FunctionComponent = () => (
  <div className="error404-container">
    <h1>Vous vous êtes perdu?</h1>
    <img src={travoltaGif as string} alt="un gif de John Travolta" />
    <p>
      Ne soyez pas perdu comme John Travolta et retourner vers l&apos;
      <Link to="/accueil">Accueil</Link>
    </p>
  </div>
);

export default Error404;
