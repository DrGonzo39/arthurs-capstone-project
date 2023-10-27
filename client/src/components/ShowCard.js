import React, { useState } from "react";

function ShowCard({ show }) {
    const [title, setTitle] = useState(show.title)
    const [rating, setRating] = useState(show.rating)
    const [date, setDate] = useState(show.date)
    const [errors, setErrors] = useState([])

    return (
        <div>
          <h1>{title}</h1>
          <h2>{date}</h2>
          <p>{rating}</p> 
          <ul>
             {errors.map((err) => (
             <li key={err}>{err}</li>
             ))}
            </ul>  
        </div>
    )
}