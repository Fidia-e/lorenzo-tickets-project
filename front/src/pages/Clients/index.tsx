import { useState, ReactElement } from 'react';

import Table from '../../components/Table';
import { clientsData, clientsTableHeaders } from './constants';
import { ItemType } from '../../utils';
import Loader from '../../components/Loader';

const Clients = (): ReactElement => {
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
