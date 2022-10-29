import { ReactElement } from 'react';
import Moment from 'react-moment';

import { GetTicketById_getTicketById_messages } from '../../apollo/queries/__generated__/GetTicketById';

interface MessageProps {
  message: GetTicketById_getTicketById_messages;
  clientId: number;
}

const Message = ({ message, clientId }: MessageProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const author =
    message.client_id != null
      ? message.client?.email
      : message.employee_id != null
      ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${message.employee?.lastname} ${message.employee?.firstname}`
      : "Problème lors de la récupération de l'auteur";

  return (
    <div className={message.client_id === clientId ? 'message message-client-container' : 'message message-container'}>
      <div className="infos-container">
        <span className="author-infos">{author}</span>
        <span className="date-infos">
          <Moment format="DD/MM/YYYY à HH:mm">{message.created_at}</Moment>
        </span>
      </div>
      <div>{message.content}</div>
    </div>
  );
};

export default Message;
