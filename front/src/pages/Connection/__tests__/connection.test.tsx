/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { render, screen } from '@testing-library/react';
import * as RRD from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

import Connection from '../index';
import { ButtonsClassNames, RoleText, Role } from '../constants';
const { selected, notSelected } = ButtonsClassNames;
const { clientText, employeeText } = RoleText;
const { employee, client } = Role;

describe('<Connection />', () => {
  // beforeEach(() => {
  //   const { pathname } = useLocation();
  //   jest.spyOn(RRD, 'useLocation').mockReturnValue({
  //     pathname: '/'
  //   } as unknown as any);

  //   jest.mock('react-router-dom', () => ({
  //     ...jest.requireActual('react-router-dom'),
  //     useLocation: jest.fn().mockImplementation(() => {
  //       return { pathname: '/' };
  //     })
  //   }));
  // });

  it('should always be there', () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Connection />} />
        </Routes>
      </Router>
    );

    console.log(screen.debug());

    expect(screen.getByText('Client')).toBeInTheDocument();
    expect(screen.getByText('Employé(e)')).toBeInTheDocument();
    expect(screen.queryByLabelText('Adresse email')).toBeInTheDocument();
  });

  it('should be there for client', () => {
    React.useState = jest.fn().mockReturnValue([client, {}]);

    render(
      <Router>
        <Routes>
          <Route path="/" element={<Connection />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText(clientText)).toBeInTheDocument();
    expect(screen.queryByLabelText(employeeText)).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Mot de Passe')).not.toBeInTheDocument();
  });

  it('should be there for employee', () => {
    React.useState = jest.fn().mockReturnValue([employee, {}]);

    render(
      <Router>
        <Routes>
          <Route path="/" element={<Connection />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText(employeeText)).toBeInTheDocument();
    expect(screen.queryByLabelText(clientText)).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Mot de Passe')).toBeInTheDocument();
  });

  it('should have the client button selected', () => {
    React.useState = jest.fn().mockReturnValue([client, {}]);

    render(
      <Router>
        <Routes>
          <Route path="/" element={<Connection />} />
        </Routes>
      </Router>
    );

    const buttons = screen.getAllByRole('button');
    const clientButton = buttons[0];
    const employeeButton = buttons[1];

    expect(clientButton).toHaveClass(selected);
    expect(clientButton).not.toHaveClass(notSelected);
    expect(employeeButton).not.toHaveClass(selected);
    expect(employeeButton).toHaveClass(notSelected);
  });

  it('should have the employee button selected', () => {
    React.useState = jest.fn().mockReturnValue([employee, {}]);

    render(
      <Router>
        <Routes>
          <Route path="/" element={<Connection />} />
        </Routes>
      </Router>
    );

    const buttons = screen.getAllByRole('button');
    const clientButton = buttons[0];
    const employeeButton = buttons[1];

    expect(employeeButton).toHaveClass(selected);
    expect(employeeButton).not.toHaveClass(notSelected);
    expect(clientButton).not.toHaveClass(selected);
    expect(clientButton).toHaveClass(notSelected);
  });
});
