import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/registration/Login";
import Signup from "./components/pages/registration/Signup";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";
import Search from "./components/pages/SearchResults";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/search/:tag" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
