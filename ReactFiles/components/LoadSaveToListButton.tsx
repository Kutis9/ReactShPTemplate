import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { fetchCharacters, saveCharacterToSharePoint } from './Api/Api';

const LoadSaveToListButton: React.FC = () => {

    const loadAndSaveCharacters = async () => {
        try {
            const characters = await fetchCharacters();
            const savePromises = characters.map(saveCharacterToSharePoint);
            await Promise.all(savePromises);

            alert('Všetky postavy boli úspešne uložené do SharePointu.');
        } catch (error) {
            console.error('Chyba pri ukladaní postáv do SharePointu:', error);
            alert('Nepodarilo sa uložiť postavy do SharePointu.');
        }
    };

    return (
        <div>
            <PrimaryButton onClick={loadAndSaveCharacters}>Načítať z API</PrimaryButton>
        </div>
    );
};

export default LoadSaveToListButton;