import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/explore";

  const token = localStorage.getItem("login-token") || "";
  const userInfo = JSON.parse(localStorage.getItem("user")) || null;

  const [isAuth, setIsAuth] = useState(token);
  const [user, setUser] = useState(userInfo);
  const navigate = useNavigate();

  const loggedMessage = (foundUser) => {
    const { firstName, lastName } = foundUser;
    toast.success(`Welcome ${firstName} ${lastName}`);
  };

  const loginHandler = async (formData) => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", formData);

      if (status === 200) {
        localStorage.setItem("login-token", encodedToken);
        localStorage.setItem("user", JSON.stringify(foundUser));

        setIsAuth(encodedToken);
        setUser(foundUser);
        navigate(from);

        loggedMessage(foundUser);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const signupHandler = async (formData) => {
    const signupUser = formData;
    try {
      const {
        data: { encodedToken },
      } = await axios.post("/api/auth/signup", signupUser);
      if (encodedToken) {
        toast.success("Your Account has Created Successfully!");
        navigate("/login");
        localStorage.setItem("Signup-Token", encodedToken);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const logoutHandler = () => {
    if (isAuth) {
      setIsAuth("");
      localStorage.removeItem("login-token");
      localStorage.removeItem("user");
      toast.success("Loged Out Successfully!");
    } else {
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        setIsAuth,
        logoutHandler,
        signupHandler,
        loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
