import React, { useState, useContext } from "react";
import { VenuesContext } from "../contexts/venues"
import { ArtistsContext } from "../contexts/artists";

function ShowCard({ show }) {
    const [rating, setRating] = useState(show.rating)
    const [date, setDate] = useState(show.date)
    const [errors, setErrors] = useState([])
    const { venues, setVenues } = useContext(VenuesContext);
    const { artists, setArtists } = useContext(ArtistsContext);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/shows/${show.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                venue_id: show.venue.id,
                date: date,
                rating: rating, 
            }),
        }).then((r) => {
            if(r.ok) {
                r.json().then((updatedShow) => onUpdateShow(updatedShow))
            }else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function onUpdateShow(updatedShow) {
        const artistToUpdate = artists.find((artist) => artist.id === updatedShow.artist_id)
        const updatedArtistShows = artistToUpdate.shows.filter((show) => {
            if (show.id === updatedShow.id) {
                return updatedShow
            }else{
                return show
            }
        });
        const updatedArtist = {...artistToUpdate, shows: updatedArtistShows }
        const updatedArtistsArray = artists.map((artist) => {
           if (artist.id === updatedArtist.id) {
                return updatedArtist
           }else{
                return artist
           }
        })
        setArtists(updatedArtistsArray);
        const venueToupdate = venues.find((venue) => venue.id === updatedShow.venue_id)
        const updatedVenueShows = venueToupdate.shows.filter((show) => {
            if (show.id === updatedShow.id) {
                return updatedShow
            }else{
                return show
            }
        });
        const updatedVenue = {...venueToupdate, shows: updatedVenueShows }
        const updatedVenuesArray = venues.map((venue) => {
            if (venue.id === updatedVenue.id) {
                return updatedVenue
            }else{
                return venue
            }
        });
        setVenues(updatedVenuesArray);
    }

    return (
        <div>
        <h1>{show.title}</h1>
        <h2>Featuring: {show.artist.name}</h2>
          <form id="show_info" onSubmit={handleSubmit}>
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