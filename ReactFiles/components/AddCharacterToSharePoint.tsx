import React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Character } from './Types/Types';
import { formatDateToDDMMYYYY } from './Service/DateFormatting';



type AddCharacterProps = {
  character: Character;
};

const AddCharacterToSharePoint: React.FC<AddCharacterProps> = ({ character }) => {


  const addItemToSharePoint = async () => {
    // Konvertujte údaje o postave na formát potrebný pre SharePoint
    const spListItem = {
      // Môžete potrebovať prispôsobiť kľúče podľa názvov stĺpcov v SharePoint zozname

      Title: character.name, // Predpokladajme, že "Title" je použitý pre "Cele_Meno"
      Fakulta: character.house,
      Herec: character.actor,
      Datum_Narodenia: formatDateToDDMMYYYY(character.dateOfBirth),
      Pohlavie: character.gender,
      Prutik_Jadro: character.wand.core,
      Prutik_Material: character.wand.wood,
      Image: character.image,
    };

    try {
      // googlenie kvoli typescriptu 
      // bolo treba pretypovat ocakavanu value dostanu z __REQUESTDIGEST
      // ta by mala byt typu HTMLInputElement
      const webAbsoluteUrl = _spPageContextInfo.webAbsoluteUrl;
      const listTitle = 'Harry_Potter_Osoby';
      const requestDigest = document.getElementById("__REQUESTDIGEST") as HTMLInputElement;
      const response = await fetch(`${webAbsoluteUrl}/_api/web/lists/getbytitle('${listTitle}')/items`, {
        method: 'POST',
        body: JSON.stringify({ '__metadata': { 'type': 'SP.Data.Harry_x005f_Potter_x005f_OsobyListItem' }, ...spListItem }),
        headers: {
          'Accept': 'application/json;odata=verbose',
          'Content-Type': 'application/json;odata=verbose',
          'X-RequestDigest': requestDigest.value,
          // Pridajte token pre autentifikáciu, ak je potrebný
        },
        credentials: 'same-origin'  // Dôležité pre autentizáciu v SharePoint prostredí
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
    <PrimaryButton text="Pridať do SharePointu" onClick={addItemToSharePoint} />
  );
};

export default AddCharacterToSharePoint;