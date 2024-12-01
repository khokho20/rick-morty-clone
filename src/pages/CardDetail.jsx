import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Badge from '../component/Badge';

const CardDetail = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchCharacterData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch character data');

        const result = await response.json();
        if (!result) throw new Error('Character data is empty');
        
        setCharacterData(result);
      } catch (error) {
        console.error("Error fetching character data:", error);
        setError('Oops! Could not retrieve character details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacterData();
  }, [apiUrl]);

  if (isLoading) {
    return <p className="w-full h-screen flex justify-center items-center text-xl">Loading...</p>;
  }

  if (error) {
    return <p className="w-full h-screen flex justify-center items-center text-2xl text-red-500">{error}</p>;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {characterData && (
        <div className="w-64 min-h-[400px] border border-blue-600 rounded-xl overflow-hidden shadow-lg">
          <div className="relative">
            <img src={characterData.image} alt={characterData.name} className="w-full h-48 object-cover" />
            <Badge status={characterData.status} />
          </div>
          <div className="p-4">
            <p className="text-lg font-semibold mb-2">{characterData.name}</p>
            <div>
              <span className="text-xs font-light">Last Location</span>
              <p className="text-sm font-medium">{characterData.location?.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetail;
