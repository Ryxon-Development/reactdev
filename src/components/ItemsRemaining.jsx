import React, { useMemo } from 'react';
import {TodosContext} from "../context/TodosContext";
import {useContext} from "react";

export default function ItemsRemaining() {

    const {todos} = useContext(TodosContext);

    function remainingCalc() {
        // console.log('remainingCalc');
        return todos.filter((todo) => !todo.isComplete).length;
    }

    //Cache the result of a function, only if the dependencies have changed [todos]
    const remaining = useMemo(remainingCalc, [todos]);

    return (
        <span>{remaining} items remaining</span>
    )
}

