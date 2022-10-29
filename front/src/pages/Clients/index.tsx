import { FunctionComponent } from 'react';

import Table from '../../components/Table';
import { clientsData, clientsTableHeaders } from './constants';
import { ItemType } from '../../utils';

const Clients: FunctionComponent = () => (
  <div className="clients-container">
    <h1>Page des clients</h1>
    <Table
      thHeaders={clientsTableHeaders}
      items={clientsData}
      styleName="table clients-table"
      itemType={ItemType.CLIENT}
    />
  </div>
);

export default Clients;
