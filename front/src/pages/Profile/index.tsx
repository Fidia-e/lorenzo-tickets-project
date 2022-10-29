import { FormEvent, FunctionComponent, useState } from 'react';
import Field from '../../components/Field';

import { useUserContext } from '../../context/user';
import SubmitButton from '../../components/SubmitButton';

const Profile: FunctionComponent = () => {
  const { user } = useUserContext();
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  console.log(user);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="profile-container">
      <h1>Bienvenue sur votre profil </h1>
      <div className="profile-infos">
        <p>Nom : {user.lastname}</p>
        <p>Prenom : {user.firstname}</p>
        <p>Adresse email : {user.email}</p>
      </div>
      <form className="change-password-form" onSubmit={handleSubmit}>
        <Field
          styleName=""
          identifier="new-password"
          placeholder="Nouveau mot de passe"
          label=""
          type="text"
          value={newPassword}
          updateField={setNewPassword}
        />
        <Field
          styleName=""
          identifier="confirm-new-password"
          placeholder="Confirmation du mot de passe"
          label=""
          type="text"
          value={confirmNewPassword}
          updateField={setConfirmNewPassword}
        />
        <SubmitButton styleName="" text="Envoyer" />
      </form>
    </div>
  );
};

export default Profile;
