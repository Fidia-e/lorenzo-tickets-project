import { Dispatch, ReactElement, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

import { isActiveClassName } from '../../utils';
import { useUserContext } from '../../context/user';

interface HeaderNaveProps {
  setIsNavVisible: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
}

/**
 * Composant pour l'affichage de la navigation
 * @param setIsNavVisible sert à conditionner l'affichage du "menu burger"
 */
const HeaderNav = ({ setIsNavVisible, logout }: HeaderNaveProps): ReactElement => {
  // Sert à fermer le "menu burger" lorsque l'écran à une taille qui le nécessite
  const handleClick = (): void => {
    if (innerWidth < 899) {
      setIsNavVisible(false);
    }
  };

  const { user } = useUserContext();

  return (
    <nav className="nav-header">
      {/* Tout le monde */}
      <NavLink onClick={handleClick} to="/accueil" className={({ isActive }) => isActiveClassName(isActive)}>
        Accueil
      </NavLink>
      <NavLink onClick={handleClick} to="/creer-un-ticket" className={({ isActive }) => isActiveClassName(isActive)}>
        Créer un ticket
      </NavLink>
      <NavLink onClick={handleClick} to="/tickets" className={({ isActive }) => isActiveClassName(isActive)}>
        Tickets
      </NavLink>

      {
        /* Pour les Admin seulement */
        user.userType === 'employee' && user.role === 'admin' && (
          <>
            <NavLink onClick={handleClick} to="/employes" className={({ isActive }) => isActiveClassName(isActive)}>
              Employés
            </NavLink>
            <NavLink onClick={handleClick} to="/clients" className={({ isActive }) => isActiveClassName(isActive)}>
              Clients
            </NavLink>
            <NavLink onClick={handleClick} to="/messages" className={({ isActive }) => isActiveClassName(isActive)}>
              Messages
            </NavLink>
          </>
        )
      }

      {
        /* Pour tous les employées */
        user.userType === 'employee' && user.role != null && (
          <NavLink onClick={handleClick} to="/profil" className={({ isActive }) => isActiveClassName(isActive)}>
            Profil
          </NavLink>
        )
      }

      <button onClick={logout}>Déconnexion</button>
    </nav>
  );
};

export default HeaderNav;
