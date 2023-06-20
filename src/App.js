import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Explore, Home } from "pages";
import {
  Footer,
  LoginForm,
  PrivateRoute,
  Profile,
  Sidebar,
  SignupForm,
  Topbar,
} from "components";
import "./App.css";
import { ScrollToTop } from "utils";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App pagewrapper">
      <ScrollToTop />
      <Toaster position="top-center" autoClose={2000} />

      {pathname !== "/" && <Topbar />}
      {pathname !== "/" && <Sidebar />}

      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>

      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
