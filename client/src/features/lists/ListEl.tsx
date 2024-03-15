import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../store/store';
import Cities from '../cities/Cities';
import HamburgerMenu from '../hamburger';

function ListEl(): JSX.Element {
  const { listId } = useParams();
  const rows = useSelector((store: RootState) => store.rows.rows).filter(
    (row) => row.listId === Number(listId),
  );
  const list = useSelector((store: RootState) => store.lists.lists).find(
    (lst) => lst.id === Number(listId),
  );
  const cities = useSelector((store: RootState) => store.cities.cities).filter((city) =>
    rows.map((row) => row.cityId).includes(city.id),
  );
  console.log(cities, 'cities');

  return (
    <div>
    
      <Cities cities={cities} />
      
      <div className="foot">
        <HamburgerMenu listId={Number(listId)}/>
        <div className="info">
          <div className="place" style={{ backgroundColor: list?.color }}></div>
          <div className="shortname">
            <p>{list?.shortName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEl;
