import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext()

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  const reLogin = async (refreshToken) => {
    try {
      const { accessToken } = await authController.refreshAccessToken(
        refreshToken
      );
      await authController.setAccessToken(accessToken);
      await login(accessToken);
    } catch (error) {
      console.error(error);
    }
  };
  const login = async (accessToken) => {
    try {
      setLoading(true);
      // const response = await userController.getMe(accessToken);
      setUser('juan');
      setToken(accessToken);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    authController.removeTokens();
  };
  
  const updateUser = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };


  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };


  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}
