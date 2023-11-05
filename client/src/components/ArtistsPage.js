import React, { useState, useContext } from 'react';
import { ArtistsContext } from '../contexts/artists';
import { UserContext } from '../contexts/user';
import ArtistCard from './ArtistCard';

function ArtistsPage() {
    const { artists, onAddArtist } = useContext(ArtistsContext)
    const { isLoggedIn } = useContext(UserContext);
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [members, setMembers] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/artists", {
           method: "POST",
           headers: {
            "Content-type": "application/json"
           },
           body: JSON.stringify({
            name: name,
            genre: genre,
            members: members,
            image: image
           }),  
        }).then((r) => {
            setName("")
            setGenre("")
            setMembers("")
            setImage("")
            if(r.ok){
                r.json().then((newArtist) => onAddArtist(newArtist))
            }else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    if (isLoggedIn) {
        return (
            <>
            <h1 id='artist_page_header'>Goers add an artist you've seen, Promoters add an artist for an upcoming show!</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                id='name'
                placeholder='Artist name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type='text'
                id='genre'
                placeholder='Genre'
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                />
                <input 
                type='text'
                id='members'
                placeholder='Band Members'
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                />
                <input 
                type='text'
                id='image'
                placeholder='Upload an Image'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                <button id='add_artist_button' type='submit'>Add this Artist to the list</button>
            </form>
            <h4>
            {artists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
            ))}
            </h4>
            <ul>
                {errors.map((err) => (
                <li key={err}>{err}</li>
                ))}
            </ul> 
            </>
        )
    }else{
        return (
            <h1>Please Login or Sign Up</h1>
        )
    }
}

export default ArtistsPage;