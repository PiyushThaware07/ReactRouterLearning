import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {
    const {id} = useParams();

  return (
    <div>
      <h1>Single Post {id}</h1>
    </div>
  )
}
