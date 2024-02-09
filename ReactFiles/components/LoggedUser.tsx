import React, { useEffect, useState } from 'react'


const LoggedUser: React.FC = () => {
  const [userName, setUserName] = useState('Načítava sa ....');

  useEffect(() => {
    // Funkcia na získanie mena prihláseného používateľa zo SharePoint REST API
    const fetchUserName = async () => {
      try {
        const response = await fetch(`${_spPageContextInfo.webAbsoluteUrl}/_api/web/currentuser`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json;odata=verbose',
            'Content-Type': 'application/json;odata=verbose',
          },
          credentials: 'same-origin'  // Dôležité pre autentizáciu v SharePoint prostredí
        });

        if (!response.ok) {
          throw new Error(`SharePoint API call failed with status ${response.status}`);
        }

        const data = await response.json();
        
        setUserName(data.d.Title); // Nastavenie mena používateľa načítaného z API
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserName('Nepodarilo sa načítať meno používateľa');
      }
    };

    fetchUserName();
  }, []);

  return <div className="content-container"><i>Prihlásený:</i> <b>{userName}</b></div>;
};

export default LoggedUser;