import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';

export default function UseReducerHook() {
    const initialValue = 10;
    const [count, dispatch] = useReducer(reducer, initialValue)

    function reducer(count, action) {
        if (action.type === "INC") {
            console.log("INCREMENT");
            return count + 1;
        }
        else if (action.type === "DECREMENT") {
            console.log("DECREMENT");
            return count - 1;
        }
        else {
            return count;
        }
    }

    return (
        <div>
            <h1>useReducer() Hook </h1>
            <div className="">
                <h1>Count : {count}</h1>
                <Button variant="danger" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</Button>
                <Button variant="primary" onClick={() => dispatch({ type: "INC" })} >Increment</Button>
            </div>
        </div>
    )
}
