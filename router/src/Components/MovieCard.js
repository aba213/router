import React from 'react'
import { Card,Button } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import {  Link } from 'react-router-dom';


function MovieCard({film}) {
    console.log(film)
    return (
        <div style={{ width: '300px', height:'700px'}}>
            <Card >
  <Card.Img variant="top" src={film.posterUrl} />
  <Card.Body>
    <Card.Title style={{color:'black'}}>{film.title}</Card.Title>
    <Card.Text style={{color:'black'}}> {film.description}</Card.Text>
    <ReactStars
    value={film.rate}
    edit={false}
    />
  </Card.Body>

  <Link to={`/Description/${film.title}`}
  state={{ film }}>    <Button variant="primary">View Trailer</Button></Link>


</Card>

            
        </div>
    )
}

export default MovieCard
