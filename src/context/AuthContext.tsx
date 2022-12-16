import React, { useState, useEffect } from 'react';
// import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '@env';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';
import jwtDecode from 'jwt-decode';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, unsetAuth } from '../redux/authSlice';
import { setUser, unsetUser } from '../redux/userSlice';
import { api } from '../common/api';

const auth0 = new Auth0({
  domain: 'dev-tb7vphht4ydgpnlh.us.auth0.com',
  clientId: 'n4aC261mYJvLhPaaCjdmhD7LEI1kXuGG',
});

const AuthContextProvider = (props: any) => {
  const [loading] = useState(true);
  const { token } = useSelector((state: any) => state.auth);
  const { isAuth } = useSelector((state: any) => state.auth);

  const [loggedIn, setLoggedIn] = useState<boolean>();
  const [userData, setUserData] = useState<
    | {
        name: string;
        picture: string;
      }
    | undefined
  >();
  const dispatch = useDispatch();

  const register = async (user: any) => {
    const apiClient = `/client`;
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    await fetch(api.base + apiClient, requestOptions)
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  const IsRegistered = async (email: string, name: string, photo: string) => {
    const apiClient = `/client/phone-email/${email}`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    await fetch(api.base + apiClient, requestOptions)
      .then(response => response.json())
      .then(response => {
        response.statusCode === 500 &&
          register({
            email: email,
            fullName: name ? name : email,
            photo: photo,
            phone: '',
          });
      })
      .catch(error => console.log(error));
  };

  const getUserData = async (id?: string) => {
    const idToken = id ? id : token;
    const data = jwtDecode<any>(idToken);
    if (data.exp < Date.now() / 1000) {
      throw new Error('ID token expired!');
    }
    return { data, id };
  };

  useEffect(() => {
    (async () => {
      try {
        const user_data = await getUserData();
        if (user_data.id && user_data.data) {
          dispatch(setAuth(user_data.id));
          dispatch(setUser(user_data.data));
        }
      } catch (err) {
        dispatch(unsetAuth());
        dispatch(unsetUser());
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (isAuth) {
          const user_data = await getUserData();
          if (user_data.id && user_data.data) {
            dispatch(setAuth(user_data.id));
            dispatch(setUser(user_data.data));
          }
        }
      } catch (err) {
        Alert.alert('Error logging in');
      }
    })();
  }, [isAuth]);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      const user_data = await getUserData(credentials.idToken);
      const name = user_data.data.given_name;
      const email = user_data.data.email;
      const photo = user_data.data.picture;

      await IsRegistered(email, name, photo);

      user_data.id && dispatch(setAuth(user_data.id));
      dispatch(setUser(user_data.data));
    } catch (err) {
      Alert.alert('Error logging in');
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession({});
      dispatch(unsetAuth());
      dispatch(unsetUser());
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
