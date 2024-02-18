import React, {useState} from 'react';
import UserContext from './UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const UserProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userType,setUserType]=useState(null);
  const [status,setStatus]=useState(false)
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let istrue = true;
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        const storedUserType = await AsyncStorage.getItem('userType');
        console.log('here usefocus context');
        if (storedUserId !== null) {
          setIsAuthenticated(true);
          setUserId(storedUserId);
          setUserType(storedUserType);
        }
      } catch (e) {
        console.error(e);
      }
    };

    bootstrapAsync();
    return () => {
      istrue = false;
    };
  }, []);

  const signIn = async (id,userType) => {
    try {
      await AsyncStorage.setItem('userId', id);
      await AsyncStorage.setItem('userType', userType);
      setIsAuthenticated(true);
      setUserId(id);
    } catch (e) {
      console.error(e);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('userId');
      setIsAuthenticated(false);
      setUserId(null);
    } catch (e) {
      console.error(e);
    }
  };
 
  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        userId,
        signIn,
        signOut,
        setIsAuthenticated,
        setUserId,
        userType,
        status,
        setStatus
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;