import { FunctionComponent, useState, FormEvent } from 'react';

import Field from '../../components/Field';
import SubmitButton from '../../components/SubmitButton';

import '../../styles/index.scss';

const AddTicket: FunctionComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const hadleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log('create ticket', event);
  };

  return (
    <div className="create-ticket-form-container">
      <form className="create-ticket-form" onSubmit={hadleSubmit}>
        <Field
          identifier="ticket-title"
          placeholder=""
          label="Titre"
          type="text"
          value={title}
          updateField={setTitle}
        />
        <Field
          identifier="ticket-content"
          placeholder=""
          label="Description"
          type="text"
          value={content}
          updateField={setContent}
        />
        <SubmitButton text="Envoyer" />
      </form>
    </div>
  );
};

export default AddTicket;
