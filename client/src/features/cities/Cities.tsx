import React, { useState } from 'react';
import CityEl from './CityEl';
import type { City } from './type';

function Cities({ cities }: { cities: City[] }): JSX.Element {
  const [showAll, setShowAll] = useState(false);

  const visibleCities = showAll ? cities : cities.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleHideAll = () => {
    setShowAll(false);
  };

  return (
    <div className="cities">
      <p>Города</p>{' '}
      <div>
        {visibleCities.map((city) => (
          <CityEl key={city.id} city={city} />
        ))}
      </div>
      {!showAll && (
        <button onClick={toggleShowAll} className="show-button">
          <p>.....</p>
        </button>
      )}
      {showAll && (
        <button onClick={toggleHideAll} className="show-button">
         <p>.....</p>
        </button>
      )}
    </div>
  );
}

export default Cities;