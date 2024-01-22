import React from "react";

export default function ItemsRemaining(props) {
    return (
        <span>{props.remaining()} items remaining</span>
    )
}

