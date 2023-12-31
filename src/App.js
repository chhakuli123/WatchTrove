import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  Explore,
  Home,
  VideoWatchPage,
  WatchLater,
  Playlist,
  PlaylistVideos,
  History,
  LikedVideos,
} from "pages";
import {
  Footer,
  LoginForm,
  PrivateRoute,
  Profile,
  Sidebar,
  SignupForm,
  Topbar,
} from "components";
import { ScrollToTop } from "utils";
import "./App.css";
import { useTheme } from "context";

function App() {
  const { pathname } = useLocation();
  const { theme } = useTheme();

  return (
    <div className="App pagewrapper" data-theme={theme}>
      <ScrollToTop />
      <Toaster
        position="top-center"
        autoClose={2000}
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />

      {pathname !== "/" && <Topbar />}
      {pathname !== "/" && <Sidebar />}

      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/watchpage/:videoId" element={<VideoWatchPage />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/likedvideos" element={<LikedVideos />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/:playlistId" element={<PlaylistVideos />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>

      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
