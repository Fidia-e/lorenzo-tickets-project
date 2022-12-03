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
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

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
        setSuccessMessage(true);
        setNewPassword('');
        setConfirmNewPassword('');
        setErrorMessage('');
      },
      onError: error => {
        setSuccessMessage(false);
        setNewPassword('');
        setConfirmNewPassword('');
        setErrorMessage('Une erreur est survenue lors de la mise à jour de votre mot de passe');
        console.log(error);
      },
    }
  );

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    // Mot de passe validation
    if (confirmNewPassword !== newPassword) {
      setNewPassword('');
      setConfirmNewPassword('');
      setErrorMessage('Vos mot de passe ne correspondent pas');
    } else if (confirmNewPassword === newPassword) {
      // Entre 8 et 128 caractères
      const hasRightLenght = newPassword.length >= 8 && newPassword.length <= 128;
      // A une lettre majuscule
      const hasUpperCase = /[A-Z]/.test(newPassword);
      // A une lettre minuscule
      const hasLowerCase = /[a-z]/.test(newPassword);
      // A un chiffre
      const hasNumbers = /\d/.test(newPassword);
      // A un caractère spécial
      const hasNonalphas = /\W/.test(newPassword);

      if (hasRightLenght && hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas) {
        // Mot de passe valide, requête envoyé
        void updatePassword();
      } else {
        setNewPassword('');
        setConfirmNewPassword('');
        setErrorMessage(
          'Votre mot de passe doit être entre 8 et 128 caractères de long et doit contenir une majuscule, une minuscule, un chiffre et un caractère spécial'
        );
      }
    }
  };

  return (
    <div className="profile-container">
      <h1>Bienvenue sur votre profil </h1>
      <div className="profile-infos">
        <p>Nom : {user.lastname}</p>
        <p>Prenom : {user.firstname}</p>
        <p>Adresse email : {user.email}</p>
        <p>Modification de votre mot de passe :</p>
        {successMessage && <p className="profile-success">Votre nouveau mot de passe à bien été pris en compte</p>}
        {errorMessage.length !== 0 && <p className="profile-error">{errorMessage}</p>}
      </div>
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
