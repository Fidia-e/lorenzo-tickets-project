import { FunctionComponent, useState, FormEvent } from 'react';

import Field from '../Field';
import SubmitButton from '../SubmitButton';

const ClientLogin: FunctionComponent = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log('client:', event);
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <Field
          identifier="client-email"
          placeholder="mon@email.com"
          label="Adresse email"
          type="email"
          value={email}
          updateField={setEmail}
        />
        <SubmitButton text="Connexion" />
      </form>
    </div>
  );
};

export default ClientLogin;
