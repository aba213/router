import React from 'react'
import MovieCard from './MovieCard'
import MovieFilter from './MovieFilter'
import { useState} from 'react';
import MovieAdd from './MovieAdd'


function MovieList() {
    const [list ,setliste] = useState([
        {

             
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
      "https://i.egycdn.com/pic/WmFwZndlY3ZjbWp2dGNtRW1hY2F3ZGZOam16UG1n.jpg",
    rate: "3",
    trailer: "https://www.youtube.com/embed/4o81FTZNfxI"

    
     
         },
    
     {
        title: "Breaking bad",
      description:
        "Genre : Crime",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY21UWWp2Y3ZjdlJjd1RtbWpQbUVsbUV2dw.jpg",
      rate: "4",
      trailer :"https://www.youtube.com/embed/faqmNf_fZlE"
 
     },
      {
        title: "hunter x hunter",
     description:
       "Genre : Anime",
     posterUrl:
       "https://i.egycdn.com/pic/WmFwZndlY21UbW12bXZtbW1tRWN2TlRqdmNja05ibWo.jpg",
     rate: "5",
     trailer:"https://www.youtube.com/embed/gh-vFtEEd84"

     }
     ])
    
     const add=(newfilm)=>{
        setliste([...list,newfilm])
      }
const [text, settext] = useState("")
const [rate, setrate] = useState("")

const filterText =(text)=>{
settext(text)
}
const filterRate =(rate)=>{
  setrate(rate)
}

        return (
          
          <div className="liste">
            <MovieFilter filterText={filterText} filterRate={filterRate} />
            <div style={{display:"flex", justifyContent:"space-around"}}>
            
           {list.filter(el => el.title.toLowerCase().includes(text.toLowerCase()) && el.rate>= rate).map(el=><MovieCard film={el}/>)}
           </div>
            <MovieAdd  add={add}/>
            
          </div>
          );
      }
      
       

export default MovieList
