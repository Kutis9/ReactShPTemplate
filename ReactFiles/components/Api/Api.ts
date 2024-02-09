import { Character } from "../Types/Types";
import { formatDateToDDMMYYYY } from "../Service/DateFormatting";



export const fetchCharacters = async () => {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await response.json();
    console.log(data);
    
    return data.slice(0, 100); // Zoberie prvých 100 položiek
};

export const saveCharacterToSharePoint = async (character: Character) => {
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

    const requestDigest = document.getElementById("__REQUESTDIGEST") as HTMLInputElement;
    const webAbsoluteUrl = _spPageContextInfo.webAbsoluteUrl; // Získanie URL SharePoint stránky
    const listTitle = 'Harry_Potter_Osoby';

    await fetch(`${webAbsoluteUrl}/_api/web/lists/getbytitle('${listTitle}')/items`, {
        method: 'POST',
        body: JSON.stringify({ '__metadata': { 'type': 'SP.Data.Harry_x005f_Potter_x005f_OsobyListItem' }, ...spListItem }),
        headers: {
            'Accept': 'application/json;odata=verbose',
            'Content-Type': 'application/json;odata=verbose',
            'X-RequestDigest': requestDigest.value,
        },
        credentials: 'same-origin',
    });

    
};