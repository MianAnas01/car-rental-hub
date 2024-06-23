import { createContext, useContext, useEffect, useState } from "react";
import { LoadingContext } from "../loading/loading.provider";
import { base_url } from "../../config/config";
import axios from "axios";

const INITIAL_STATE = {
  user: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authanticated, setAuthanticated] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setAuthanticated(true);
      getProfile();
    }
  }, []);

  const logOut = async () => {
    setAuthanticated(false);
    setUser(null);
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    setLoading(true);

    try {
      const getToken = localStorage.getItem("token");
      console.log(getToken, "token");
      const { data } = await axios.get(`${base_url}/user/profile`, {
        headers: {
          Authorization: `${getToken}`,
        },
      });

      setUser(data?.user);
    } catch (err) {
      console.log("🚀 ~ getClientProfile ~ err**********************:", err);
    } finally {
      setLoading(false);
    }
  };

  const login = async (loginData, onSuccess, onFailure) => {
    setLoading(true);

    try {
      
      const { data } = await axios.post(`${base_url}/user/login`, loginData);
      localStorage.setItem("token", data?.token);
      setAuthanticated(true);
      setUser(data);
      onSuccess(data);
    } catch (err) {
      console.log("🚀 ~ login ~ err:", err);
      onFailure(err);
    } finally {
      setLoading(false);
    }
  };


  const signup = async (signupData) => {
    setLoading(true);

    try {
      const { data } = await axios.post(`${base_url}/user/signup`, signupData);
      console.log("🚀 ~ signup ~ data:", data);
    } catch (err) {
      console.log("🚀 ~ signup ~ err:", err);
    } finally {
      setLoading(false);
    }
  };

  const values = {
    user,
    setSelectedRole,
    selectedRole,
    getProfile,
    login,
    signup,
    setAuthanticated,
    authanticated,
    logOut,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// import {createContext, useContext, useEffect, useState } from "react";
//  import { LoadingContext } from "../loading/loading.provider";
//  import { base_url } from "../../config/config";
//  import axios from "axios";


// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [selectedRole, setSelectedRole] = useState(null);
//   const { setLoading } = useContext(LoadingContext);

//   useEffect(() => {
//     const getToken = localStorage.getItem("token");
//     if (getToken) {
//       setAuthenticated(true);
//       getProfile();
//     }
//   }, []);

//   const logOut = async () => {
//     setAuthenticated(false);
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   const getProfile = async () => {
//     setLoading(true);

//     try {
//       const getToken = localStorage.getItem("token");
//       const { data } = await axios.get(`${base_url}/user/profile`, {
//         headers: {
//           Authorization: getToken,
//         },
//       });

//       setUser(data?.user);
//     } catch (err) {
//       console.log("🚀 ~ getClientProfile ~ err**:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (loginData) => {
//     setLoading(true);

//     try {
//       const { data } = await axios.post(`${base_url}/user/login`, loginData);
//       localStorage.setItem("token", data?.token);
//       setAuthenticated(true);
//       setUser(data?.user);
//     } catch (err) {
//       console.log("🚀 ~ login ~ err:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const signup = async (signupData) => {
//     setLoading(true);

//     try {
//       const { data } = await axios.post(`${base_url}/user/signup`, signupData);
//       console.log("🚀 ~ signup ~ data:", data);
//     } catch (err) {
//       console.log("🚀 ~ signup ~ err:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const values = {
//     user,
//     setSelectedRole,
//     selectedRole,
//     getProfile,
//     login,
//     signup,
//     setAuthenticated,
//     authenticated,
//     logOut,
//   };

//   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
// };
// export default AuthContext;