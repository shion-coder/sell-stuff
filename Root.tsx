import React, { FC, useContext, useState } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import { navigationTheme, AppNavigator, AuthNavigator, navigationRef } from 'navigation';
import { AuthContext, getUser } from 'context';

import OfflineNotice from 'components/offline-notice';

/* -------------------------------------------------------------------------- */

const Root: FC = () => {
  const { state: user, update: setUser } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await getUser();

    user && setUser(user);
  };

  if (!isReady) return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />;

  return (
    <>
      <OfflineNotice />

      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default Root;
