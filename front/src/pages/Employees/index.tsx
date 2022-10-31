import { useState, ReactElement } from 'react';

import Table from '../../components/Table';
import { employeesData, employeesTableHeaders } from './constants';
import { ItemType } from '../../utils';
import Loader from '../../components/Loader';

const Employees = (): ReactElement => {
  const [loading, setLoading] = useState(true);

  // TODO: setLoading au onCompleted et onError de la requête

  return (
    <div className="employees-container">
      <h1>Page des employés</h1>
      {loading ? (
        <Loader />
      ) : (
        <Table
          thHeaders={employeesTableHeaders}
          items={employeesData}
          styleName="table employees-table"
          itemType={ItemType.EMPLOYEE}
        />
      )}
    </div>
  );
};

export default Employees;
