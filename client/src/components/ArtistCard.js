import React from "react";

function ArtistCard({ artist }) {

    return (
        <>
        <h1 id="artist_name">{artist.name}</h1>
        <img id="artist_pic" src={artist.image} alt="artist"/>
        <h3 id="members">{artist.members}</h3>
        <p id="genre">{artist.genre}</p>
        <br />
        </>
    )
}

export default ArtistCard;