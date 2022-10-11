import { FunctionComponent } from 'react';

import Table from '../../components/Table';
import { ticketsData, ticketsTableHeaders } from './constants';

const Tickets: FunctionComponent = () => (
  <div className="tickets-container">
    <h1>Page des tickets</h1>
    <Table thHeaders={ticketsTableHeaders} items={ticketsData} />
  </div>
);

export default Tickets;
