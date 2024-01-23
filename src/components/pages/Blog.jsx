import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <div className="content page-block">
            <ul>
                <li>
                    {/*<a href={"/blog/1"}>Blog Post 1</a>*/}
                    <Link to={"/blog/1"}>Blog Post 1</Link>
                </li>
                <li>
                    {/*<a href={"/blog/2"}>Blog Post 2</a>*/}
                    <Link to={"/blog/2"}>Blog Post 2</Link>
                </li>
                <li>
                    {/*<a href={"/blog/3"}>Blog Post 3</a>*/}
                    <Link to={"/blog/3"}>Blog Post 3</Link>
                </li>
            </ul>
        </div>
    )
}