import React, { useState, useEffect } from 'react';
import { DetailsList, IColumn, SelectionMode } from '@fluentui/react';
import AddCharacterToSharePoint from './AddCharacterToSharePoint';
import { Character } from './Types/Types'; 


const CharactersDetailsList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      const data = await response.json();
      const formattedData = data.map((character: Character) => ({
        ...character, 
        core: character.wand.core, // Pridanie core ako priamu vlastnost kazdeho zaznamu
        wood: character.wand.wood,
      }));
      setCharacters(formattedData.slice(0, 20)); // Nacita len prvych 20 postav
    };

    fetchCharacters();
  }, []);

  const columns: IColumn[] = [
    { key: 'column1', name: 'Meno', fieldName: 'name', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column2', name: 'Herec', fieldName: 'actor', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column3', name: 'Pohlavie', fieldName: 'gender', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column4', name: 'Fakulta', fieldName: 'house', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column5', name: 'Prútik materiál', fieldName: 'wood', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column6', name: 'Prútik jadro', fieldName: 'core', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'column7', name: 'Image', fieldName: 'image', minWidth: 100, maxWidth: 300, isResizable: true },
    {
        key: 'column8',
        name: 'Akcia',
        fieldName: 'action',
        minWidth: 150,
        maxWidth: 200,
        isResizable: true,
        onRender: (item: Character) => (
        <AddCharacterToSharePoint character={item} />
        ),
      },
  ];

  return (
    <DetailsList
      items={characters}
      columns={columns}
      setKey="set"
      layoutMode={0} // Justify columns
      selectionMode={SelectionMode.none} // Vypnutie výberu
    />
  );
};

export default CharactersDetailsList;