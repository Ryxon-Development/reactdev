import React from "react";
import { NavLink } from "react-router-dom";
export default function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    {/*<a href="/">Home</a>*/}
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    {/*<a href="/about">About</a>*/}
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    {/*<a href="/contact">Contact</a>*/}
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    {/*<a href="/blog">Blog</a>*/}
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>
        </nav>
    )
}