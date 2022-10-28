import { FormEvent, FunctionComponent, useState } from 'react';
import Field from '../../components/Field';

import { useUserContext } from '../../context/user';
import SubmitButton from '../../components/SubmitButton';
import { GET_EMPLOYEE_BY_EMAIL } from '../../apollo/queries/getEmployeeByEmail';
import { GetEmployeeByEmail_getEmployeeByEmail } from '../../apollo/queries/__generated__/GetEmployeeByEmail';

const Profile: FunctionComponent = () => {
  const { user } = useUserContext();
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  console.log(user);

  const getEmployeeByEmail: GetEmployeeByEmail_getEmployeeByEmail[] = [];

  const [currentUserDatas, setCurrentUserDatas] = useState(getEmployeeByEmail);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="profile-container">
      <h1>Profil de {user.email}</h1>
      <div className="profile-infos">
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
