import { FunctionComponent, useState, FormEvent } from 'react';

import Field from '../../components/Field';
import FieldLongText from '../../components/FieldLongText';
import SubmitButton from '../../components/SubmitButton';

import '../../styles/index.scss';

const AddTicket: FunctionComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    console.log('add ticket', event);
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
