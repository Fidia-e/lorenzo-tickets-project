import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import travoltaGif from '../../assets/images/travolta.gif';
import { useUserContext } from '../../context/user';

const Error404: FunctionComponent = () => {
  const { user } = useUserContext();

  const baseText = 'Ne soyez pas perdu comme John Travolta et retourner vers ';
  const fullText = user?.logged ? (
    <>
      {baseText} l&apos;
      <Link to="/accueil">Accueil</Link>
    </>
  ) : (
    <>
      {baseText} la page de
      <Link to="/"> Connexion</Link>
    </>
  );

  return (
    <div className="error404-container">
      <h1>Vous vous êtes perdu?</h1>
      <img src={travoltaGif as string} alt="un gif de John Travolta" />
      <p>{fullText}</p>
    </div>
  );
};

export default Error404;
