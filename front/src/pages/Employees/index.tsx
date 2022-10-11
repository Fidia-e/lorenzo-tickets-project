import { FunctionComponent } from 'react';

import Table from '../../components/Table';
import { employeesData, employeesTableHeaders } from './constants';

const Employees: FunctionComponent = () => (
  <div className="employees-container">
    <h1>Page des employés</h1>
    <Table thHeaders={employeesTableHeaders} items={employeesData} />
  </div>
);

export default Employees;
