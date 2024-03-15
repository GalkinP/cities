import React, { useEffect } from 'react';

import './App.css';

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import type { City } from './features/cities/type';
import { type RootState, useAppDispatch } from './store/store';
import Cities from './features/cities/Cities';
import type { List } from './features/lists/type';
import Lists from './features/lists/Lists';
import ListEl from './features/lists/ListEl';
import type { Row } from './features/rows/type';
import CreateList from './features/lists/CreateList';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const rows = useSelector((store: RootState) => store.rows.rows);
  useEffect(() => {
    fetch('/api/cities')
      .then((res) => res.json())
      .then((data: { message: string; cities: City[] }) =>
        dispatch({
          type: 'cities/load',
          payload: data.cities,
        }),
      )
      .catch((err) => console.log(err));
    fetch('/api/lists')
      .then((res) => res.json())
      .then((data: { message: string; lists: List[] }) =>
        dispatch({
          type: 'lists/load',
          payload: data.lists,
        }),
      )
      .catch((err) => console.log(err));
    fetch('/api/rows')
      .then((res) => res.json())
      .then((data: { message: string; rows: Row[] }) =>
        dispatch({ type: 'rows/load', payload: data.rows }),
      )
      .catch((err) => console.log(err));
  }, []);
  const cities = useSelector((store: RootState) => store.cities.cities);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Cities cities={cities} />
              <Lists />
            </>
          }
        />
        <Route path="/lists/:listId" element={<ListEl />} />
        <Route path="/lists/create" element={<CreateList />} />
        <Route path="/lists/edit/:listId" element={<CreateList />} />
      </Routes>
    </div>
  );
}

export default App;
