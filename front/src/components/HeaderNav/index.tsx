import { Dispatch, ReactElement, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/index.scss';
import { isActiveClassName } from '../../utils';

interface HeaderNaveProps {
  setIsNavVisible: Dispatch<SetStateAction<boolean>>;
}

const HeaderNav = ({ setIsNavVisible }: HeaderNaveProps): ReactElement => {
  const handleClick = (): void => {
    if (innerWidth < 899) {
      setIsNavVisible(false);
    }
  };

  return (
    <nav className="nav-header">
      <NavLink onClick={handleClick} to="/accueil" className={({ isActive }) => isActiveClassName(isActive)}>
        Accueil
      </NavLink>
      <NavLink onClick={handleClick} to="/creer-un-ticket" className={({ isActive }) => isActiveClassName(isActive)}>
        Créer un ticket
      </NavLink>
      <NavLink onClick={handleClick} to="/tickets" className={({ isActive }) => isActiveClassName(isActive)}>
        Tickets
      </NavLink>
      <NavLink onClick={handleClick} to="/employes" className={({ isActive }) => isActiveClassName(isActive)}>
        Employés
      </NavLink>
      <NavLink onClick={handleClick} to="/clients" className={({ isActive }) => isActiveClassName(isActive)}>
        Clients
      </NavLink>
      <NavLink onClick={handleClick} to="/messages" className={({ isActive }) => isActiveClassName(isActive)}>
        Messages
      </NavLink>
      <NavLink onClick={handleClick} to="/profil" className={({ isActive }) => isActiveClassName(isActive)}>
        Profil
      </NavLink>
      <button>Déconnexion</button>
    </nav>
  );
};

export default HeaderNav;
