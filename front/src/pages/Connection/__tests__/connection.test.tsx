import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../apollo';

import Connection from '../index';
import { ButtonsClassNames, RoleText } from '../constants';
const { selected, notSelected } = ButtonsClassNames;
const { clientText, employeeText } = RoleText;

describe('<Connection />', () => {
  it('should always be on screen', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Connection />} />
          </Routes>
        </Router>
      </ApolloProvider>
    );

    expect(screen.getByText('Client')).toBeInTheDocument();
    expect(screen.getByText('Employé(e)')).toBeInTheDocument();
    expect(screen.queryByLabelText('Adresse email')).toBeInTheDocument();
  });

  it('is a client', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Connection />} />
          </Routes>
        </Router>
      </ApolloProvider>
    );

    const buttons = screen.getAllByRole('button');
    const clientButton = buttons[0];
    const employeeButton = buttons[1];

    expect(screen.getByText(clientText)).toBeInTheDocument();
    expect(screen.queryByLabelText(employeeText)).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Mot de passe')).not.toBeInTheDocument();

    expect(clientButton).toHaveClass(selected);
    expect(clientButton).not.toHaveClass(notSelected);
    expect(employeeButton).not.toHaveClass(selected);
    expect(employeeButton).toHaveClass(notSelected);
  });

  it('is an employee', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Connection />} />
          </Routes>
        </Router>
      </ApolloProvider>
    );

    const buttons = screen.getAllByRole('button');
    const clientButton = buttons[0];
    const employeeButton = buttons[1];

    fireEvent.click(employeeButton);

    expect(screen.getByText(employeeText)).toBeInTheDocument();
    expect(screen.queryByLabelText(clientText)).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Mot de passe')).toBeInTheDocument();

    expect(employeeButton).toHaveClass(selected);
    expect(employeeButton).not.toHaveClass(notSelected);
    expect(clientButton).not.toHaveClass(selected);
    expect(clientButton).toHaveClass(notSelected);
  });
});
