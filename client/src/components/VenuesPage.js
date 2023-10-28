import React, { useContext } from 'react';
import { VenuesContext } from '../contexts/venues';
import { UserContext } from '../contexts/user';
import VenueCard from './VenueCard';
import GoerVenueCard from './GoerVenueCard';


function VenuesPage() {
    const { venues } = useContext(VenuesContext)
    const { user } = useContext(UserContext)
    
    return (
        <>
        {venues.map((venue) => {
            if (user.type === 'Promoter') {
              return <VenueCard key={venue.id} venue={venue}/>
            }else{
                return <GoerVenueCard key={venue.id} venue={venue}/>
            }
        })}
        </>
    )
}

export default VenuesPage;