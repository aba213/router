import React from 'react'
import { Link,Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Description = () => {
  const location = useLocation()
  const { film } = location.state
    return( <div> 
      <h1>{film.film.title}</h1>

      <h1>hello</h1>
      </div>)
    }
    export default Description;