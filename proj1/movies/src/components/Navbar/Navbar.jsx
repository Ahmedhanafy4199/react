import { Component } from "react";
import {NavLink} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <NavLink className="navbar-brand" to="/">
                        Navbar
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tv">Tv</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}
