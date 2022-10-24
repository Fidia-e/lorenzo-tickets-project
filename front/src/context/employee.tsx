import { createContext, useContext, ReactNode, ReactElement } from 'react';

import useLocalStorage from '../hook/useLocalStorage';
import { EmployeeLogged, Role } from '../types';

export const emptyEmployee: EmployeeLogged = {
  id: '' as unknown as number,
  email: '',
  token: '',
  role: Role.UNKNOWN,
  logged: false
};

export interface EmployeeContextType {
  employee: EmployeeLogged;
  setEmployee: (newValue: EmployeeLogged) => void;
}

const initialContext: EmployeeContextType = {
  employee: emptyEmployee,
  setEmployee: (newValue: EmployeeLogged) => {
    console.log('initialContext');
  }
};

const EmployeeContext = createContext<EmployeeContextType>(initialContext);

export const ContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [employee, setEmployee] = useLocalStorage<EmployeeLogged>('employee', emptyEmployee);

  return <EmployeeContext.Provider value={{ employee, setEmployee }}>{children}</EmployeeContext.Provider>;
};

export const useEmployeeContext = (): EmployeeContextType => useContext<EmployeeContextType>(EmployeeContext);
