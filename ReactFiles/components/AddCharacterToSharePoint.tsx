import React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';

interface Character {
  id: string;
  name: string;
  house: string;
  actor: string;
  dateOfBirth: string;
  gender: string;
  wand: {
    core: string;
    wood: string;
  };
}

interface AddCharacterProps {
  character: Character;
}

const AddCharacterToSharePoint: React.FC<AddCharacterProps> = ({ character }) => {
  const addItemToSharePoint = async () => {
    // Konvertujte údaje o postave na formát potrebný pre SharePoint
    const spListItem = {
      // Môžete potrebovať prispôsobiť kľúče podľa názvov stĺpcov v SharePoint zozname
      Title: character.name, // Predpokladajme, že "Title" je použitý pre "Cele_Meno"
      Fakulta: character.house,
      Herec: character.actor,
      Datum_Narodenia: character.dateOfBirth,
      Pohlavie: character.gender,
      Prutik_Jadro: character.wand.core,
      Prutik_Material: character.wand.wood,
    };

    try {
      const response = await fetch(`https://[váš-doména]/_api/web/lists/getbytitle('Harry_Potter_Osoby')/items`, {
        method: 'POST',
        body: JSON.stringify({ '__metadata': { 'type': 'SP.Data.Harry_Potter_OsobyListItem' }, ...spListItem }),
        headers: {
          'Accept': 'application/json;odata=verbose',
          'Content-Type': 'application/json;odata=verbose',
          'X-RequestDigest': document.getElementById("__REQUESTDIGEST").value,
          // Pridajte token pre autentifikáciu, ak je potrebný
        },
      });

      if (!response.ok) {
        throw new Error('Chyba pri pridávaní položky do SharePointu');
      }

      alert('Postava bola úspešne pridaná do SharePointu.');
    } catch (error) {
      console.error('Chyba pri pridávaní položky do SharePointu:', error);
      alert('Nepodarilo sa pridať postavu do SharePointu.');
    }
  };

  return (
    <DefaultButton text="Pridať do SharePointu" onClick={addItemToSharePoint} />
  );
};

export default AddCharacterToSharePoint;