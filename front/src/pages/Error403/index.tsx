import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import ahahah from '../../assets/images/ahahah.gif';

const Error403: FunctionComponent = () => (
  <div className="error403-container">
    <h1>Ah ah ah, vous n&apos;avez pas dit le mot magique</h1>
    <img src={ahahah as string} alt="un gif de Dennis Nedry de Jurassic Park" />
    <p>
      Ce n&apos;est pas très gentil d&apos;essayer d&apos;aller où vous n&apos;avez pas le droit, retourner plutôt vers
      l&apos;
      <Link to="/accueil">Accueil</Link>
    </p>
  </div>
);
export default Error403;
