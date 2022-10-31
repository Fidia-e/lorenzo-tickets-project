import { FormEvent, FunctionComponent, useState } from 'react';
import Field from '../../components/Field';
import { useMutation } from '@apollo/client';

import { useUserContext } from '../../context/user';
import SubmitButton from '../../components/SubmitButton';
import { UPDATE_EMPLOYEE_PASSWORD } from '../../apollo/mutations/updateEmployeePassword';
import {
  updateEmployeePassword,
  updateEmployeePasswordVariables,
} from '../../apollo/mutations/__generated__/updateEmployeePassword';

const Profile: FunctionComponent = () => {
  const { user } = useUserContext();
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [updatePassword] = useMutation<updateEmployeePassword, updateEmployeePasswordVariables>(
    UPDATE_EMPLOYEE_PASSWORD,
    {
      variables: {
        id: user.id,
        input: {
          password: newPassword,
        },
      },
      onCompleted: data => {
        alert('mot de passe mis a jour !');
        setNewPassword('');
        setConfirmNewPassword('');
      },
      onError: error => {
        console.log(error);
      },
    }
  );

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log(event);
    if (confirmNewPassword === newPassword) {
      void updatePassword();
    } else {
      alert('Vos mot de passe ne correspondent pas ');
    }
  };

  return (
    <div className="profile-container">
      <h1>Bienvenue sur votre profil </h1>
      <div className="profile-infos">
        <p>Nom : {user.lastname}</p>
        <p>Prenom : {user.firstname}</p>
        <p>Adresse email : {user.email}</p>
      </div>
      <h2>Modification de votre mot de passe</h2>
      <form className="change-password-form" onSubmit={handleSubmit}>
        <Field
          styleName=""
          identifier="new-password"
          placeholder="Nouveau mot de passe"
          label=""
          type="password"
          value={newPassword}
          updateField={setNewPassword}
        />
        <Field
          styleName=""
          identifier="confirm-new-password"
          placeholder="Confirmation du mot de passe"
          label=""
          type="password"
          value={confirmNewPassword}
          updateField={setConfirmNewPassword}
        />
        <SubmitButton styleName="" text="Envoyer" />
      </form>
    </div>
  );
};

export default Profile;
