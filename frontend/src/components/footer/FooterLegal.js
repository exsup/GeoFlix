import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

export default class FooterLegal extends React.Component {
    render() {
        return (
            <ul className="footer-menu  flex-container flex-column">
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/"
                    >
                        Carrers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/"
                    >
                        Privacy
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/"
                    >
                        Terms
                    </NavLink>
                </li>

            </ul>
        );
    }
}
