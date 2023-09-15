import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/MovieDetails";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies/:id" element={<Movie />}></Route>
        <Route path="search" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
