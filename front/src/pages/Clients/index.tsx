import { useState, ReactElement } from 'react';

import Table from '../../components/Table';
import { ItemType } from '../../types';
import { clientsData, clientsTableHeaders } from './constants';
import Loader from '../../components/Loader';

const Clients = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);

  // TODO: setLoading au onCompleted et onError de la requête

  return (
    <div className="clients-container">
      <h1>Page des clients</h1>
      {loading ? (
        <Loader />
      ) : (
        <Table
          thHeaders={clientsTableHeaders}
          items={clientsData}
          styleName="table clients-table"
          itemType={ItemType.CLIENT}
        />
      )}
    </div>
  );
};

export default Clients;
