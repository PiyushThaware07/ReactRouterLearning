import React,{useContext} from 'react'
import Parent from './Parent'
import { MyContext } from '../main'

export default function GrandParent() {
    const data = useContext(MyContext)
    return (
        <div>
            <h1>GrandParent</h1>
            <p>Fname : {data.fname}</p>
            <p>Lname : {data.lname}</p>
            <Parent />
        </div>
    )
}
