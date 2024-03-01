import React from 'react'

import { Link } from 'react-router-dom'

export default function Posts() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/post/1">Post1</Link>
                </li>
                <li>
                    <Link to="/post/2">Post2</Link>
                </li>
                <li>
                    <Link to="/post/3">Post3</Link>
                </li>
                <li>
                    <Link to="/post/4">Post4</Link>
                </li>
            </ul>
        </div>
    )
}
