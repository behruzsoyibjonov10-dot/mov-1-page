import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Main/Navbar";
import Footer from "./Components/Main/Footer";

// Sahifalar (Pages)
import Home from './Pages/Home';
import Movie from './Pages/Movies';
import Support from './Pages/Support';
import Subsc from './Pages/Subscription';
import MovieDetail from './Pages/Movie_inside';
import ActorDetail from './Pages/ActorDetail';
import Register from './Pages/Register'; 

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subsc />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/actor/:id" element={<ActorDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;