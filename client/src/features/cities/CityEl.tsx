import React from 'react';
import type { City } from './type';

function CityEl({ city }: { city: City }): JSX.Element {
  return (
    <div className='city'>
      <p>{city.name}</p>
      <p>{city.year}</p>
    </div>
  );
}

export default CityEl;
