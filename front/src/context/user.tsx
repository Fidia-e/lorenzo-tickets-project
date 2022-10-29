import { createContext, useContext, ReactNode, ReactElement } from 'react';
import { Role, UserType } from '../apollo/__generated__/globalTypes';

import { useLocalStorage } from '../utils';
import { Signin_signin } from '../apollo/queries/__generated__/Signin';

import { UserType } from '../apollo/__generated__/globalTypes';

export const emptyUser = {
  id: '' as unknown as number,
  email: '',
  token: '',
  firstname: '',
  lastname: '',
  role: null as unknown as Role,
  userType: null as unknown as UserType,
  logged: false,
} as unknown as Signin_signin;

export interface UserContextType {
  user: Signin_signin;
  setUser: (newValue: Signin_signin) => void;
}

const initialContext: UserContextType = {
  user: emptyUser,
  setUser: (newValue: Signin_signin) => {
    console.log('initialContext');
  },
};

const UserContext = createContext<UserContextType>(initialContext);

export const ContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [user, setUser] = useLocalStorage<Signin_signin>('user', emptyUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextType => useContext<UserContextType>(UserContext);
