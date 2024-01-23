import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {

    const params = useParams();

    return (
        <div className="content page-block">
            <p>This is a Blog Post.</p>
            <p>The id is: {params.id}</p>
        </div>
    )
}