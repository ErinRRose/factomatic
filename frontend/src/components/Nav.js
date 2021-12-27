import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faQuestion, faBook, faBriefcaseClock } from '@fortawesome/free-solid-svg-icons';


library.add(faHouse, faQuestion, faBook);
const iconStyle = {
    display: 'inline-block',
    padding: '8px'
}

const Nav = () => (
    <div>
        <div style={iconStyle}>
        <Link to="/"><FontAwesomeIcon icon="fa-house" /></Link>
        </div>
        <div style={iconStyle}>
        <Link to="/fact"><FontAwesomeIcon icon="fa-book" /></Link>
        </div>
        <div style={iconStyle}>
        <Link to="/about"><FontAwesomeIcon icon="fa-question" /></Link>
        </div>
    </div>
);

export default Nav;