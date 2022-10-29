import { ReactElement } from 'react';
import Moment from 'react-moment';

import { GetTicketById_getTicketById_messages } from '../../apollo/queries/__generated__/GetTicketById';

interface MessageProps {
  message: GetTicketById_getTicketById_messages;
}

const Message = ({ message }: MessageProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const author =
    message.client_id != null
      ? message.client?.email
      : message.employee_id != null
      ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${message.employee?.lastname} ${message.employee?.firstname}`
      : "Problème lors de la récupération de l'auteur";

  return (
    <div className="message-container">
      <span>{author}</span>
      <span>
        <Moment format="DD/MM/YYYY">{message.created_at}</Moment>
      </span>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
