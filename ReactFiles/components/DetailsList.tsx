import React, { useState, useEffect } from 'react';
import { DefaultButton, DetailsList, IColumn } from '@fluentui/react';
import AddCharacterToSharePoint from './AddCharacterToSharePoint';

interface Character {
  id: string;
  name: string;
  actor: string;
  gender: string;
  house: string;
  wand: {
    wood: string;
    core: string;
    length: number;
    };
}

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
    {
        key: 'action',
        name: 'Akcia',
        fieldName: 'action',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        onRender: (item: Character) => (
          <DefaultButton 
            text="Pridať" 
            onClick={() => AddCharacterToSharePoint(item)} 
            allowDisabledFocus 
          />
        ),
      },
  ];

  return (
    <DetailsList
      items={characters}
      columns={columns}
      setKey="set"
      layoutMode={0} // Justify columns
      selectionPreservedOnEmptyClick={true}
      ariaLabelForSelectionColumn="Toggle selection"
      ariaLabelForSelectAllCheckbox="Toggle selection for all items"
    />
  );
};

export default CharactersDetailsList;