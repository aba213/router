
import React,{useState} from 'react'
import ReactStars from 'react-rating-stars-component'



function MovieFilter( {filterText,filterRate} ) {
    return (
        <div>
            <input placeholder="search" onChange={(e)=>filterText(e.target.value)} />
            <ReactStars
            count={5}
            onChange={(newRating)=>filterRate(newRating)}
            size={24}
            activeColor="#ffd700"
            />
        </div>
    )
}

export default MovieFilter

