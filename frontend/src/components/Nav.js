import { Link } from "react-router-dom";

const Nav = () => (
    <div>
        <Link to="/about">About</Link><br/>
        <Link to="/fact">Fact</Link><br/>
        <Link to="/">Home</Link><br/>
    </div>
);

export default Nav;