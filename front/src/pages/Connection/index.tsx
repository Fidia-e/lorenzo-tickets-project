import { FunctionComponent, useState } from 'react';

import ClientLogin from '../../components/ClientLogin';
import EmployeeLogin from '../../components/EmployeeLogin';
import { Role, ButtonsClassNames, RoleText } from './constants';

const Connection: FunctionComponent = () => {
  const [error, setError] = useState(false);
  const [role, setRole] = useState(Role.client);

  const { employee, client } = Role;
  const { selected, notSelected } = ButtonsClassNames;
  const { clientText, employeeText } = RoleText;

  return (
    <div className="connection-container">
      <div className="button-container">
        <button className={role === client ? selected : notSelected} onClick={() => setRole(client)}>
          Client
        </button>
        <button className={role === employee ? selected : notSelected} onClick={() => setRole(employee)}>
          Employé(e)
        </button>
      </div>
      {role === client && (
        <div className="login-form-role">
          <p>{clientText}</p>
          <ClientLogin />
        </div>
      )}
      {role === employee && (
        <div className="login-form-role">
          <p>{employeeText}</p>
          <EmployeeLogin setError={setError} />
        </div>
      )}
      {error && <p className="error-message">Erreur de connexion</p>}
    </div>
  );
};

export default Connection;
