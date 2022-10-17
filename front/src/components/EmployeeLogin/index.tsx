import { FunctionComponent, useState, FormEvent } from 'react';
import { useLazyQuery } from '@apollo/client';

import Field from '../Field';
import SubmitButton from '../SubmitButton';
import { SIGNIN } from '../../apollo/queries/signin';
import { Signin, SigninVariables } from '../../types';

const EmployeeLogin: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [triggerSignin, { error }] = useLazyQuery<Signin, SigninVariables>(SIGNIN, {
    onCompleted: data => {
      console.log(data);
    },
  });

  console.log(error);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    void triggerSignin({
      variables: { email, password },
    });

    console.log('email:', email);
    console.log('password:', password);
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
