import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import ahahah from '../../assets/images/ahahah.gif';
import { useUserContext } from '../../context/user';

const Error403: FunctionComponent = () => {
  const { user } = useUserContext();

  const baseText = "Ce n'est pas très gentil d'essayer d'aller où vous n'avez pas le droit, ";
  const fullText = user?.logged ? (
    <>
      {baseText} retournez plutôt vers l&apos;
      <Link to="/accueil">Accueil</Link>
    </>
  ) : (
    <>
      {baseText} vous devez d&apos;abord vous identifier sur la page de
      <Link to="/"> Connexion</Link>
    </>
  );

  return (
    <div className="error403-container">
      <h1>Ah ah ah, vous n&apos;avez pas dit le mot magique</h1>
      <img src={ahahah as string} alt="un gif de Dennis Nedry de Jurassic Park" />
      <p>{fullText}</p>
    </div>
  );
};
export default Error403;
