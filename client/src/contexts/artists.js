import React, { useState, useEffect } from 'react';

const ArtistsContext = React.createContext()

function ArtistsProvider({ children }) {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        fetch("/artists")
        .then((r) => r.json())
        .then((data) => setArtists(data))
    }, [])

    return (
        <ArtistsContext.Provider value={{ artists, setArtists}}>
            { children } 
        </ArtistsContext.Provider>
    )
}

export { ArtistsContext, ArtistsProvider };