// import { createContext, useContext, useState } from "react";
// import api from "../api/axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   // Register
//   const register = async (formData) => {
//     const res = await api.post("/auth/register", formData);

//     return res.data;
//   };

//   // Login
//   const login = async (email, password) => {
//     const res = await api.post("/auth/login", {
//       email,
//       password,
//     });

//     const { user, accessToken } = res.data;

//     localStorage.setItem("user", JSON.stringify(user));
//     localStorage.setItem("accessToken", accessToken);

//     setUser(user);

//     return true;
//   };

//   // Logout
//   const logout = async () => {
//     await api.post("/auth/logout");

//     localStorage.removeItem("user");
//     localStorage.removeItem("accessToken");

//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         register,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

import { createContext, useContext, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Register
  const register = async (username, email, password) => {
    const res = await api.post("/auth/register", {
      username,
      email,
      password,
    });

    return res.data;
  };

  // Login
  const login = async (email, password) => {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    const { user, accessToken } = res.data;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", accessToken);

    setUser(user);

    return true;
  };

  // Logout
  const logout = async () => {
    try {
      // Change to GET because your backend uses GET
      await api.post("/auth/logout");

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");

      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);