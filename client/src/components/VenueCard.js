import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VenuesContext } from "../contexts/venues"
import { ArtistsContext } from "../contexts/artists";
import ShowCard from "./ShowCard";


function VenueCard({ venue }) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [artistId, setArtistId] = useState(0)
    const [errors, setErrors] = useState([])
    const { venues, setVenues } = useContext(VenuesContext);
    const { artists, setArtists } = useContext(ArtistsContext);
    const navigate = useNavigate();
   

    function onAddShow(newShow) {
        const artistToUpdate = artists.find((artist) => artist.id === newShow.artist_id)
        const updatedArtistShows = [...artistToUpdate.shows, newShow]
        const updatedArtist = {...artistToUpdate, shows: updatedArtistShows }
        const updatedArtistsArray = artists.map((artist) => {
            if(artist.id === updatedArtist.id){
                return updatedArtist
            }else{
                return artist
            }
        })
        setArtists(updatedArtistsArray)
        const updatedVenueShows = [...venue.shows, newShow]
        const updatedVenue = {...venue, shows: updatedVenueShows}
        const updatedVenuesArray = venues.map((venue) => {
            if(venue.id === updatedVenue.id){
                return updatedVenue
            }else{
                return venue
            }
        })
        setVenues(updatedVenuesArray)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/shows", {
           method: "POST",
           headers: {
            "Content-type": "application/json"
           },
           body: JSON.stringify({
            artist_id: artistId,
            venue_id: venue.id,
            title: title,
            date: date 
           }),  
        }).then((r) => {
            if(r.ok){
                setTitle("")
                setDate("")
                setArtistId(0)
                r.json().then((newShow) => onAddShow(newShow))
            }else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }
    

    return (
        <div id="venue_card">
            <img src={venue.image} alt="venue_pic" id="venue_image"/>
            <h1 id="venue_name">{venue.name}</h1>
            <h2 id="venue_location">{venue.location}</h2>
            <h3 id="upcoming_shows">Coming Soon at this Venue!</h3>
            <button onClick={() => navigate("/artists")}>Don't forget to add your featured Artist if they're not on the list</button>
            <form onSubmit={handleSubmit}>
            <input 
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
             <input 
            type="date"
            id="date"
            placeholder="When is it? (M/DD)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            <select onChange={(e) => setArtistId(e.target.value)} name="artists" id="artists_select">
                <option>Choose an artist</option>
                {artists.map((artist) => (
                    <option key={artist.id} value={artist.id}>{artist.name}</option>
                ))}
            </select>
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