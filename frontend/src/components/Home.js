import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <h1>Welcome to Facto-matic!</h1>
            <Link to="/fact"><button>Click Me!</button></Link>
        </div>
    );
}