import { ReactElement, useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Field from '../Field';
import SubmitButton from '../SubmitButton';
import { SIGNIN } from '../../apollo/queries/signin';
import { EmployeeLogged, Signin, SigninVariables } from '../../types';
import { useEmployeeContext } from '../../context/employee';

interface EmployeeLoginProps {
  setError: Dispatch<SetStateAction<boolean>>;
}

const EmployeeLogin = ({ setError }: EmployeeLoginProps): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setEmployee } = useEmployeeContext();
  const navigate = useNavigate();

  const [triggerSignin] = useLazyQuery<Signin, SigninVariables>(SIGNIN, {
    onCompleted: data => {
      const newEmployee: EmployeeLogged = {
        id: data.signin.id,
        email: data.signin.email,
        token: data.signin.token.token,
        role: data.signin.role,
        logged: true
      };

      setEmployee(newEmployee);
      setError(false);
      navigate('/accueil');
    },
    onError: () => {
      setError(true);
    }
  });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    void triggerSignin({
      variables: { email, password: password ?? '' }
    });
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
