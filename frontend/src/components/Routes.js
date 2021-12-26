import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Fact from "./Fact";
import Nav from "./Nav";


const myRoutes =() => (
    <Router>
        <Nav />
    <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About/>} />
        <Route path='/fact' element={<Fact />} />
    </Routes>
    </Router>
);
export default myRoutes;