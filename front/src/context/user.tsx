import { createContext, useContext, ReactNode, ReactElement } from 'react';
import { Role, UserType } from '../apollo/__generated__/globalTypes';

import { UserLogged } from '../types';
import { useLocalStorage } from '../utils';

export const emptyUser: UserLogged = {
  id: '' as unknown as number,
  email: '',
  token: '',
  role: null as unknown as Role,
  userType: null as unknown as UserType,
  logged: false,
};

export interface UserContextType {
  user: UserLogged;
  setUser: (newValue: UserLogged) => void;
}

const initialContext: UserContextType = {
  user: emptyUser,
  setUser: (newValue: UserLogged) => {
    console.log('initialContext');
  },
};

const UserContext = createContext<UserContextType>(initialContext);

export const ContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [user, setUser] = useLocalStorage<UserLogged>('user', emptyUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextType => useContext<UserContextType>(UserContext);
