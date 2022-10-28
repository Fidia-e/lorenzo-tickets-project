import { useState, FormEvent, ReactElement } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Field from '../../components/Field';
import FieldLongText from '../../components/FieldLongText';
import SubmitButton from '../../components/SubmitButton';
import { useUserContext } from '../../context/user';

import { ADD_TICKET } from '../../apollo/mutations/addTicket';
import { CreateTicket, CreateTicketVariables } from '../../apollo/mutations/__generated__/CreateTicket';
import { Status } from '../../apollo/__generated__/globalTypes';

import '../../styles/index.scss';

const AddTicket = (): ReactElement => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useUserContext();

  const navigate = useNavigate();

  const [addTicket] = useMutation<CreateTicket, CreateTicketVariables>(ADD_TICKET, {
    variables: {
      input: {
        title,
        content,
        status: Status.open,
        client_id: user.id,
      },
    },
    onCompleted: data => {
      navigate(`/ticket/${data?.createTicket?.id as number}`);
    },
    onError: error => {
      console.log(error);
    },
  });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    void addTicket();
  };

  return (
    <div className="add-ticket-form-container">
      <form className="add-ticket-form" onSubmit={handleSubmit}>
        <Field
          identifier="ticket-title"
          placeholder=""
          label="Titre"
          type="text"
          value={title}
          updateField={setTitle}
        />
        <FieldLongText
          identifier="ticket-content"
          placeholder="Décrivez votre problème"
          label="Description"
          value={content}
          updateField={setContent}
        />
        <SubmitButton text="Envoyer" />
      </form>
    </div>
  );
};

export default AddTicket;
