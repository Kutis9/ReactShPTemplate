import React, { useState, useEffect } from 'react';

interface Character {
    id: string;
    name: string;
    species: string;
    gender: string;
    house?: string;
    dateOfBirth: string;
    yearOfBirth: number;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
        wood?: string;
        core?: string;
        length?: number;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alive: boolean;
    image: string;
}

const CharactersList: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('https://hp-api.onrender.com/api/characters');
            const data = await response.json();
            //   setCharacters(data); //Nacita vsetky data z API 
            setCharacters(data.slice(0, 20)); //Nacita prvych 20 udajov z API 

        };

        fetchCharacters();
    }, []);

    return (
        <div className="characters-container">
            {characters.map((character) => (
                <div key={character.id} className="character-card">
                    {character.image ? (
                        <img src={character.image} alt={character.name} className="character-image" />
                    ) : (
                        <div className="character-placeholder">Obrázok nedostupný</div>
                    )}
                    <div className="character-info">
                        <h3><b>{character.name}</b></h3>
                        <p>Fakulta: {character.house || 'Bez fakulty'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CharactersList;