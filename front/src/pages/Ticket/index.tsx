import { useLazyQuery, useMutation } from '@apollo/client';
import { FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';

import { ADD_MESSAGE } from '../../apollo/mutations/addMessage';
import { CreateMessage, CreateMessageVariables } from '../../apollo/mutations/__generated__/CreateMessage';
import { GET_TICKET_BY_ID } from '../../apollo/queries/getTicketById';
import {
  GetTicketById,
  GetTicketByIdVariables,
  GetTicketById_getTicketById
} from '../../apollo/queries/__generated__/GetTicketById';
import FieldLongText from '../../components/FieldLongText';
import Message from '../../components/Message';
import SubmitButton from '../../components/SubmitButton';
import { useUserContext } from '../../context/user';
import { emptyTicket } from './constants';

const Ticket: FunctionComponent = () => {
  const { id } = useParams();
  const idAsNumber = Number(id);

  const { user } = useUserContext();

  const [ticket, setTicket] = useState(emptyTicket);
  const [newMessageText, setNewMessageText] = useState('');

  const [triggerGetTicketById] = useLazyQuery<GetTicketById, GetTicketByIdVariables>(GET_TICKET_BY_ID, {
    variables: { ticketId: idAsNumber },
    fetchPolicy: 'no-cache', // Pas de cache afin que la page soit à jour lors de l'envoie d'un nouveau message
    onCompleted: data => {
      if (data !== null) {
        setTicket(data?.getTicketById as GetTicketById_getTicketById);
      }
    },
    onError: error => {
      console.log(error);
    }
  });

  const [addMessage] = useMutation<CreateMessage, CreateMessageVariables>(ADD_MESSAGE, {
    variables: {
      input: {
        content: newMessageText,
        ticket_id: idAsNumber,
        client_id: user.userType === 'client' ? user.id : null,
        employee_id: user.userType === 'employee' ? user.id : null
      }
    },
    onCompleted: data => {
      setNewMessageText('');
      void triggerGetTicketById(); // On refait la requête pour avoir le nouveau message
    },
    onError: error => {
      console.log(error);
    }
  });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    void addMessage();
  };

  useEffect(() => {
    void triggerGetTicketById();
  }, []);

  return (
    <div className="ticket-container">
      <h1>{ticket.title}</h1>
      <div>
        <div>
          <span className="ticket-subtitle">Numéro du ticket:</span> {ticket.id}
        </div>
        <div>
          <span className="ticket-subtitle">Bénéficiaire:</span> {ticket.client?.email}
        </div>
        <div>
          <span className="ticket-subtitle">Entreprise:</span> {ticket.client?.company}
        </div>
        <div>
          <span className="ticket-subtitle">Statut:</span> {ticket.status}
        </div>
        <div>
          <span className="ticket-subtitle">Prise en charge:</span>{' '}
          {ticket.employees.map(employee => (
            <span key={`employee${employee.id as number}`}>
              {employee.lastname} {employee.firstname}
            </span>
          ))}
        </div>
        <div>
          <span className="ticket-subtitle">Date de création:</span>{' '}
          {<Moment format="DD/MM/YYYY à HH:mm">{ticket.created_at}</Moment>}
        </div>
        {Boolean(ticket.updated_at) && (
          <div>
            <span className="ticket-subtitle">Dernière modification:</span>{' '}
            <Moment format="DD/MM/YYYY à HH:mm">{ticket.updated_at}</Moment>
          </div>
        )}

        <div>
          <span className="ticket-subtitle">Description:</span> {ticket.content}
        </div>
      </div>

      <div className="messages-ctn">
        <h1 className="ticket-subtitle">Messages:</h1>
        {ticket.messages.map(message => (
          <Message key={`message${message?.id as number}`} message={message} clientId={ticket.client?.id as number} />
        ))}
      </div>

      <div className="messages-form-container">
        <form className="messages-form" onSubmit={handleSubmit}>
          <FieldLongText
            identifier="nouveau-message"
            placeholder=""
            label="Ajouter un message"
            value={newMessageText}
            updateField={setNewMessageText}
            styleName=""
          />
          <SubmitButton text="Envoyer" styleName="submit-button" />
        </form>
      </div>
    </div>
  );
};

export default Ticket;
