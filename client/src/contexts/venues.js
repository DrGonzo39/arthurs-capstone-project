import React, { useState, useEffect } from 'react';

const VenuesContext = React.createContext();

function VenuesProvider({ children }) {
    const [venues, setVenues] = useState([])

    useEffect(() => {
        fetch("/venues")
        .then((r) => r.json())
        .then((data) => setVenues(data))
    })

    return (
        <VenuesContext.Provider value={{ venues, setVenues }}>
            { children }
        </VenuesContext.Provider>
    )
}

export { VenuesContext, VenuesProvider };