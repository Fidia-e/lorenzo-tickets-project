import { FunctionComponent, useState, FormEvent } from 'react';

import Field from '../Field';
import SubmitButton from '../SubmitButton';

const EmployeeLogin: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log('employee:', event);
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <Field
          identifier="employee-email"
          placeholder="mon@email.com"
          label="Adresse email"
          type="email"
          value={email}
          updateField={setEmail}
        />
        <Field
          identifier="password"
          placeholder="Mot de Passe"
          label="Mot de Passe"
          type="password"
          value={password}
          updateField={setPassword}
        />
        <SubmitButton text="Connexion" />
      </form>
    </div>
  );
};

export default EmployeeLogin;
