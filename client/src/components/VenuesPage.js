import React, { useContext } from 'react';
import { VenuesContext } from '../contexts/venues';


function VenuesPage() {
    const { venues } = useContext(VenuesContext)
    
    return (
        <>
        {venues.map((venue) => (
                <VenueCard key={venue.id} venue={venue}/>
            ))}
        </>
    )
}

export default VenuesPage;