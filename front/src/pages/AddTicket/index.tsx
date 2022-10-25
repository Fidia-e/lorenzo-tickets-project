import { FunctionComponent, useState, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Field from '../../components/Field';
import FieldLongText from '../../components/FieldLongText';
import SubmitButton from '../../components/SubmitButton';
import { useUserContext } from '../../context/user';

import { ADD_TICKET } from '../../apollo/mutations/addTicket';
import { CreateTicket, CreateTicketVariables } from '../../apollo/mutations/__generated__/CreateTicket';

import '../../styles/index.scss';
import { setDefaultResultOrder } from 'dns';

const AddTicket: FunctionComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useUserContext();

  const navigate = useNavigate();

  const [triggerAddTicket ] = useMutation<CreateTicket, CreateTicketVariables>(ADD_TICKET), {
    onCompleted: data => {
      const newTicket: CreateTicket = {
        title: data.createTicket.title,
        content: data.createTicket.content,
        status: data.createTicket.status,
        client_id: data.createTicket.client_id,
      };

      // setError(false)
      // navigate('/');
    },
    onError: (error) => {
      console.log(error);
    }
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log('add ticket', event);

    // addTicket({
    //   variables: {
    //     input: {
    //       title: title,
    //       content: content,
    //       status: '',
    //       client_id: '',
    //     },
    //   },
    // })
    //   .then(() => {
    //     navigate('/');
    //   })
    //   .catch(() => {
    //     setErrorMessage('erreur moi meme');
    //   });
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
