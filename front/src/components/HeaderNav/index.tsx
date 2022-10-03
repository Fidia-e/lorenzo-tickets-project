import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/index.scss';
import { isActiveClassName } from '../../utils';

const HeaderNav: FunctionComponent = () => {
  return (
    <nav className="nav">
      <NavLink to="/accueil" className={({ isActive }) => isActiveClassName(isActive)}>
        Accueil
      </NavLink>
      <NavLink to="/creer-un-ticket" className={({ isActive }) => isActiveClassName(isActive)}>
        Créer un ticket
      </NavLink>
      <NavLink to="/tickets" className={({ isActive }) => isActiveClassName(isActive)}>
        Tickets
      </NavLink>
      <NavLink to="/employes" className={({ isActive }) => isActiveClassName(isActive)}>
        Employés
      </NavLink>
      <NavLink to="/clients" className={({ isActive }) => isActiveClassName(isActive)}>
        Clients
      </NavLink>
      <NavLink to="/messages" className={({ isActive }) => isActiveClassName(isActive)}>
        Messages
      </NavLink>
      <NavLink to="/profil" className={({ isActive }) => isActiveClassName(isActive)}>
        Profil
      </NavLink>
      <button>Déconnexion</button>
    </nav>
  );
};

export default HeaderNav;
