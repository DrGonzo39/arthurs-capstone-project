import React from 'react';

function GoerVenueCard({ venue }) {

    return (
        <div id="goer_venue_card">
            <img src={venue.image} alt="venue_pic" id="venue_image"/>
            <h1 id="venue_name">{venue.name}</h1>
            <h2 id="venue_location">{venue.location}</h2>
            <h3 id="upcoming_shows">Coming Soon at this Venue!</h3>
            <h4>
                {venue.shows.map((show) => (
                    <div>
                        <h1>{show.title}</h1>
                        <p>{show.date}</p>
                    </div>
                ))}
            </h4>
        </div>
    )
}

export default GoerVenueCard; 