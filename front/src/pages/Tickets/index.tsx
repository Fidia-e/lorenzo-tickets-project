import { FunctionComponent, useEffect, useState } from 'react';

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
import { useLazyQuery } from '@apollo/client';
import { useUserContext } from '../../context/user';

const Tickets: FunctionComponent = () => {
  const { user } = useUserContext();

  const initialTickets: GetAllTickets_getAllTickets[] | GetAllTicketsByClientId_getAllTicketsByClientId[] = [];

  const [allTickets, setAllTickets] = useState(initialTickets);

  const [triggerGetAllTickets] = useLazyQuery<GetAllTickets>(GET_ALL_TICKETS, {
    onCompleted: data => {
      setAllTickets(data?.getAllTickets);
    },
    onError: error => {
      console.log(error);
    },
  });

  const [triggerGetAllTicketsByClientId] = useLazyQuery<GetAllTicketsByClientId, GetAllTicketsByClientIdVariables>(
    GET_ALL_TICKETS_BY_CLIENT_ID,
    {
      variables: { id: user.id },
      onCompleted: data => {
        if (data !== null) {
          setAllTickets(data.getAllTicketsByClientId as GetAllTicketsByClientId_getAllTicketsByClientId[]);
        }
      },
      onError: error => {
        console.log(error);
      },
    }
  );

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
      <Table thHeaders={ticketsTableHeaders} items={allTickets} />
    </div>
  );
};

export default Tickets;
