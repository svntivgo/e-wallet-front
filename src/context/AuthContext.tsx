import React, { useState, useEffect } from 'react';
// import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '@env';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';
import jwtDecode from 'jwt-decode';
import { Alert } from 'react-native';

const auth0 = new Auth0({
  domain: 'dev-tb7vphht4ydgpnlh.us.auth0.com',
  clientId: 'n4aC261mYJvLhPaaCjdmhD7LEI1kXuGG',
});

const AuthContextProvider = (props: any) => {
  const [loading] = useState(true);
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const [userData, setUserData] = useState<
    | {
        name: string;
        picture: string;
      }
    | undefined
  >();
  const getUserData = async (id?: string) => {
    const idToken = id ? id : await SInfo.getItem('idToken', {});
    const { name, picture, exp } = jwtDecode<any>(idToken);
    const data = jwtDecode<any>(idToken);
    // console.log('data JWT', JSON.stringify(data, null, 2));

    if (exp < Date.now() / 1000) {
      throw new Error('ID token expired!');
    }

    return {
      name,
      picture,
    };
  };

  useEffect(() => {
    (async () => {
      try {
        const user_data = await getUserData();
        if (user_data) {
          setLoggedIn(true);
          setUserData(user_data);
        }
      } catch (err) {
        setLoggedIn(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (loggedIn) {
          const user_data = await getUserData();
          if (user_data) {
            setLoggedIn(true);
            setUserData(user_data);
          }
        }
      } catch (err) {
        Alert.alert('Error logging in');
      }
    })();
  }, [loggedIn]);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      console.log(credentials);
      await SInfo.setItem('idToken', credentials.idToken, {});
      const user_data = await getUserData(credentials.idToken);
      setLoggedIn(true);
      setUserData(user_data);
    } catch (err) {
      console.log(err);
      Alert.alert('Error logging in');
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession({});
      await SInfo.deleteItem('idToken', {});
      setLoggedIn(false);
      setUserData(undefined);
    } catch (err) {
      Alert.alert('Error logging in');
    }
  };

  const value = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const AuthContext = React.createContext<any>(null);

export { AuthContext, AuthContextProvider };
