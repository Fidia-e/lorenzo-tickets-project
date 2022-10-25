import { ReactElement, useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Field from '../Field';
import SubmitButton from '../SubmitButton';
import { SIGNIN } from '../../apollo/queries/signin';
import { UserLogged, Signin, SigninVariables, UserType, UserLoginProps } from '../../types';
import { useUserContext } from '../../context/user';

const ClientLogin = ({ setError }: UserLoginProps): ReactElement => {
  const [email, setEmail] = useState('');

  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const [triggerSignin] = useLazyQuery<Signin, SigninVariables>(SIGNIN, {
    onCompleted: data => {
      const newUser: UserLogged = {
        id: data.signin.id,
        email: data.signin.email,
        token: data.signin.token.token,
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
      variables: { email, userType: UserType.CLIENT },
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
        />
        <SubmitButton text="Connexion" />
      </form>
    </div>
  );
};

export default ClientLogin;
