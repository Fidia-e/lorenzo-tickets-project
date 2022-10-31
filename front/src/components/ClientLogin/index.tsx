import { ReactElement, useState, FormEvent } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Field from '../Field';
import SubmitButton from '../SubmitButton';
import { SIGNIN } from '../../apollo/queries/signin';
import { UserLogged, UserLoginProps } from '../../types';
import { useUserContext } from '../../context/user';
import { Signin, SigninVariables } from '../../apollo/queries/__generated__/Signin';
import { UserType } from '../../apollo/__generated__/globalTypes';

const ClientLogin = ({ setError }: UserLoginProps): ReactElement => {
  const [email, setEmail] = useState('');

  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const [triggerSignin] = useLazyQuery<Signin, SigninVariables>(SIGNIN, {
    onCompleted: data => {
      const newUser: UserLogged = {
        id: data.signin.id as number,
        email: data.signin.email as string,
        token: data.signin.token?.token as string,
        userType: data.signin.userType,
        company: data.signin.company,
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
      variables: { email, userType: UserType.client },
    });
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
          styleName="input"
        />
        <SubmitButton text="Connexion" styleName="submit-button submit-login" />
      </form>
    </div>
  );
};

export default ClientLogin;
