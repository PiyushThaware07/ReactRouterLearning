import React, { useContext } from 'react';
import { MyContext } from '../main';

export default function Child() {
    const data = useContext(MyContext)
    console.log(data);
    return (
        <div>
            <h3>Child</h3>
            <p>Fname : {data.fname}</p>
            <p>Lname : {data.lname}</p>
        </div>
    )
}
