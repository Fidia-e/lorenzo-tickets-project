/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactElement, useEffect, useState } from 'react';

import ClientLogin from '../../components/ClientLogin';
import EmployeeLogin from '../../components/EmployeeLogin';
import { ButtonsClassNames, RoleText } from './constants';
import { UserType } from '../../types';
import Logo from '../../images/lorenzo-tickets-logo.png';

interface ConnectionProps {
  logout: () => void;
}

const Connection = ({ logout }: ConnectionProps): ReactElement => {
  const [error, setError] = useState(false);
  const [userType, setUserType] = useState(UserType.CLIENT);

  const { EMPLOYEE, CLIENT } = UserType;
  const { selected, notSelected } = ButtonsClassNames;
  const { clientText, employeeText } = RoleText;

  useEffect(() => {
    // Nettoyage du localStorage afin de ne pas avoir de soucis si l'utilisateur ne c'est pas déconnecté
    logout();
  }, []);

  return (
    <div className="connection-container">
      <div className="form-container">
        <div className="logoCtn">
          <img src={Logo} alt="logo" />
        </div>
        <div className="button-container">
          <button className={userType === CLIENT ? selected : notSelected} onClick={() => setUserType(CLIENT)}>
            Client
          </button>
          <button className={userType === EMPLOYEE ? selected : notSelected} onClick={() => setUserType(EMPLOYEE)}>
            Employé(e)
          </button>
        </div>
        {userType === CLIENT && (
          <div className="login-form-role">
            <p>{clientText}</p>
            <ClientLogin setError={setError} />
          </div>
        )}
        {userType === EMPLOYEE && (
          <div className="login-form-role">
            <p>{employeeText}</p>
            <EmployeeLogin setError={setError} />
          </div>
        )}
        {error && <p className="error-message">Erreur de connexion</p>}
      </div>
    </div>
  );
};

export default Connection;
