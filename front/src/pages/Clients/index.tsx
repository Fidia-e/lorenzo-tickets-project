import { FunctionComponent } from 'react';

import Table from '../../components/Table';
import { clientsData, clientsTableHeaders } from './constants';

const Clients: FunctionComponent = () => (
  <div className="clients-container">
    <h1>Page des clients</h1>
    <Table thHeaders={clientsTableHeaders} items={clientsData} styleName="table clients-table" />
  </div>
);

export default Clients;
