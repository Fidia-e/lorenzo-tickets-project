import { ReactElement, useLayoutEffect, useState } from 'react';

import '../../styles/index.scss';
import HeaderNav from '../HeaderNav';

interface HeaderProps {
  logout: () => void;
}

const Header = ({ logout }: HeaderProps): ReactElement => {
  // Sert à afficher la navigation, le css s'occupe du style soit "normal" soit "menu burger"
  const [isNavVisible, setIsNavVisible] = useState(false);
  // Sert à gérer l'affichage de la navigation selon la taille d'écran notamment pour les rotations
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleBurgerMenuClick = (): void => {
    setIsNavVisible(!isNavVisible);
  };

  const handleResize = (): void => {
    setInnerWidth(window.innerWidth);
  };

  /** Quasi identique à useEffect mais s'éxecute de manière synchrone après les mutations
   * du DOM et avant que le navigateur ait pu procéder à l'affichage, ce qui réduit le nombre de render
   * article qui compare les deux en détails:
   * https://blog.logrocket.com/useeffect-vs-uselayouteffect-examples/
   */
  useLayoutEffect(() => {
    /**
     * isNavVisible n'est utilisé que sur téléphone ou tablette
     * afin d'afficher les éléments de la nav via un boutton
     * il faut donc "désactiver" ce state sur un écran plus large
     * en le passant à true car l'utilisateur n'a dans ce cas
     * plus la possibilité de le changer
     */
    if (innerWidth >= 899) {
      setIsNavVisible(true);
    }

    // Utiliser pour détecter la rotation d'un téléphone/tablette
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className="header">
      <button className="burgerMenuButton" onClick={handleBurgerMenuClick}>
        {isNavVisible ? 'close' : 'open'}
      </button>
      {isNavVisible && <HeaderNav logout={logout} setIsNavVisible={setIsNavVisible} />}
    </div>
  );
};

export default Header;
