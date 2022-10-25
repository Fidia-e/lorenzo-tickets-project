/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FunctionComponent, useEffect, useState } from 'react';

import Table from '../../components/Table';
import { ticketsTableHeaders } from './constants';
import { GetAllTickets, GetAllTickets_getAllTickets } from '../../apollo/queries/__generated__/GetAllTickets';
import { GET_ALL_TICKETS } from '../../apollo/queries/getAllTickets';
import { useLazyQuery } from '@apollo/client';

const Tickets: FunctionComponent = () => {
  const [allTickets, setAllTickets] = useState([] as GetAllTickets_getAllTickets[]);

  const [triggerGetAllTickets] = useLazyQuery<GetAllTickets>(GET_ALL_TICKETS, {
    onCompleted: data => {
      console.log(data.getAllTickets);
      setAllTickets(data?.getAllTickets);
    },
    onError: error => {
      console.log(error);
    },
  });

  useEffect(() => {
    void triggerGetAllTickets();
  }, []);

  return (
    <div className="tickets-container">
      <h1>Page des tickets</h1>
      <Table thHeaders={ticketsTableHeaders} items={allTickets} />
    </div>
  );
};

export default Tickets;
