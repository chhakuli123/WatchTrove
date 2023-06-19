import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Explore, Home } from "pages";
import { Footer, Sidebar, Topbar } from "components";
import "./App.css";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App pagewrapper">
      <Toaster />
      {pathname !== "/" && <Topbar />}
      {pathname !== "/" && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
