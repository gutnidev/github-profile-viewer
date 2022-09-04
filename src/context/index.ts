import { createContext, Dispatch, SetStateAction } from 'react';
import { IUser } from 'types';

interface IAppContext {
    currentUser: IUser | null;
    setCurrentUser: Dispatch<SetStateAction<IUser | null>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<IAppContext>({
  currentUser: null,
  setCurrentUser: () => {},
  loading: false,
  setLoading: () => {},
});
