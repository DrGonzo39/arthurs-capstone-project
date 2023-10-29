import React, { useState } from "react";

function ShowCard({ show }) {
    const [rating, setRating] = useState(show.rating)
    const [date, setDate] = useState(show.date)
    const [errors, setErrors] = useState([])

    return (
        <div>
        <h1>{show.title}</h1>
        <h2>Starring: {show.artist}</h2>
          <form id="show_info">
            <p>Date:</p>
            <input 
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            <p>Rating:</p>
            <input 
            type="text"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            />
            <button type="submit">Edit this show</button>
          </form>
          <ul>
             {errors.map((err) => (
             <li key={err}>{err}</li>
             ))}
            </ul>  
        </div>
    )
}

export default ShowCard;