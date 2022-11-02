import { ReactElement, useEffect, useState } from 'react';

import Table from '../../components/Table';
import { ticketsTableHeaders } from './constants';
import { GetAllTickets, GetAllTickets_getAllTickets } from '../../apollo/queries/__generated__/GetAllTickets';
import { GET_ALL_TICKETS } from '../../apollo/queries/getAllTickets';
import {
  GetAllTicketsByClientId,
  GetAllTicketsByClientIdVariables,
  GetAllTicketsByClientId_getAllTicketsByClientId,
} from '../../apollo/queries/__generated__/GetAllTicketsByClientId';
import { GET_ALL_TICKETS_BY_CLIENT_ID } from '../../apollo/queries/getAllTicketsByClientId';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useUserContext } from '../../context/user';
import { DeleteTicket, DeleteTicketVariables } from '../../apollo/mutations/__generated__/DeleteTicket';
import { DELETE_TICKET } from '../../apollo/mutations/deleteTicket';
import Loader from '../../components/Loader';
import { ItemType } from '../../types';

const Tickets = (): ReactElement => {
  const { user } = useUserContext();

  const initialTickets: GetAllTickets_getAllTickets[] | GetAllTicketsByClientId_getAllTicketsByClientId[] = [];

  const [allTickets, setAllTickets] = useState(initialTickets);
  const deleteMessageError = 'Un problème est survenu lors de la suppression du ticket';
  const [deleteMessage, setDeleteMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const clearDeleteMessage = (): void => {
    setTimeout(() => {
      setDeleteMessage('');
      location.reload(); // TODO trouver une meilleur façon de faire
    }, 2000);
  };

  const [triggerGetAllTickets] = useLazyQuery<GetAllTickets>(GET_ALL_TICKETS, {
    onCompleted: data => {
      setAllTickets(data?.getAllTickets);
      setLoading(false);
    },
    onError: error => {
      console.log(error);
      setLoading(false);
    },
  });

  const [triggerGetAllTicketsByClientId] = useLazyQuery<GetAllTicketsByClientId, GetAllTicketsByClientIdVariables>(
    GET_ALL_TICKETS_BY_CLIENT_ID,
    {
      variables: { id: user.id },
      onCompleted: data => {
        if (data !== null) {
          setAllTickets(data.getAllTicketsByClientId as GetAllTicketsByClientId_getAllTicketsByClientId[]);
          setLoading(false);
        }
      },
      onError: error => {
        console.log(error);
        setLoading(false);
      },
    }
  );

  const [triggerDeleteTicket] = useMutation<DeleteTicket, DeleteTicketVariables>(DELETE_TICKET, {
    onCompleted: data => {
      if (data !== null && data.deleteTicket === true) {
        setDeleteMessage('Le ticket à bien été supprimé');
      }
      if (data !== null && data.deleteTicket === false) {
        setDeleteMessage(deleteMessageError);
      }
      clearDeleteMessage();
    },
    onError: () => {
      setDeleteMessage(deleteMessageError);
      clearDeleteMessage();
    },
  });

  useEffect(() => {
    if (user.userType === 'client') {
      void triggerGetAllTicketsByClientId();
    }
    if (user.userType === 'employee') {
      void triggerGetAllTickets();
    }
  }, []);

  return (
    <div className="tickets-container">
      <h1>Page des tickets</h1>
      <p>{deleteMessage}</p>

      {loading ? (
        <Loader />
      ) : (
        <Table
          thHeaders={ticketsTableHeaders}
          items={allTickets}
          styleName="table tickets-table"
          deleteFunction={triggerDeleteTicket}
          itemType={ItemType.TICKET}
        />
      )}
    </div>
  );
};

export default Tickets;
