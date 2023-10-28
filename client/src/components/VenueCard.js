import React, { useState, useContext } from "react";
import { VenuesContext } from "../contexts/venues"
import ShowCard from "./ShowCard";


function VenueCard({ venue }) {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState(0)
    const [date, setDate] = useState("")
    const [errors, setErrors] = useState([])
    const { venues } = useContext(VenuesContext);
    

    return (
        <div id="venue_card">
            <img src={venue.image} alt="venue_pic" id="venue_image"/>
            <h1 id="venue_name">{venue.name}</h1>
            <h2 id="venue_location">{venue.location}</h2>
            <h3 id="upcoming_shows">Coming Soon at this Venue!</h3>
            <form >
            <input 
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
             <input 
            type="integer"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            />
             <input 
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            <button id="new_show_button" type="submit">Add your show!</button>
            </form>
            <h4>
                {venue.shows.map((show) => (
                    <ShowCard key={show.id} show={show}/>
                ))}
            </h4>
            <ul>
             {errors.map((err) => (
             <li key={err}>{err}</li>
             ))}
            </ul> 
        </div>
    )
}

export default VenueCard;