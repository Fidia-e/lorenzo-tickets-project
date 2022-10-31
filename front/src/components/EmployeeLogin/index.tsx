import { ReactElement, useState, FormEvent } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Field from '../Field';
import SubmitButton from '../SubmitButton';
import { SIGNIN } from '../../apollo/queries/signin';
import { UserLogged, Signin, SigninVariables, UserLoginProps } from '../../types';
import { useUserContext } from '../../context/user';
import { UserType } from '../../apollo/__generated__/globalTypes';

const EmployeeLogin = ({ setError }: UserLoginProps): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const [triggerSignin] = useLazyQuery<Signin, SigninVariables>(SIGNIN, {
    onCompleted: data => {
      const newUser: UserLogged = {
        id: data.signin.id,
        email: data.signin.email,
        token: data.signin.token.token,
        role: data.signin.role,
        userType: data.signin?.userType,
        logged: true,
      };

      setUser(newUser);
      setError(false);
      navigate('/accueil');
    },
    onError: () => {
      setError(true);
    },
  });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    void triggerSignin({
      variables: { email, password: password ?? '', userType: UserType.employee },
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
          styleName="input"
        />
        <Field
          identifier="password"
          placeholder="mot de passe"
          label="Mot de passe"
          type="password"
          value={password}
          updateField={setPassword}
          styleName="input"
        />
        <SubmitButton text="Connexion" styleName="submit-button submit-login" />
      </form>
    </div>
  );
};

export default EmployeeLogin;
