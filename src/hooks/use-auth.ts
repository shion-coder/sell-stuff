import { useContext } from 'react';
import jwtDecode from 'jwt-decode';

import { IUser, AuthContext, storeToken, removeToken } from 'context';

/* -------------------------------------------------------------------------- */

export const useAuth = () => {
  const { state: user, update: setUser } = useContext(AuthContext);

  const logIn = (authToken: string) => {
    const user: IUser = jwtDecode(authToken);
    setUser(user);
    storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);

    removeToken();
  };

  return { user, logIn, logOut };
};
