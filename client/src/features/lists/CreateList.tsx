import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store/store';
import type { List } from './type';
import type { Row } from '../rows/type';

function CreateList(): JSX.Element {
  const colours = [
    'blue',
    'yellow',
    'red',
    'green',
    'orange',
    'purple',
    'pink',
    'brown',
    'grey',
    'cyan',
    'magenta',
    'lime',
  ];
  const cities = useSelector((store: RootState) => store.cities.cities);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shortName, setShortName] = useState('');
  const [fullName, setFullName] = useState('');
  const [color, setColor] = useState('');
  const [cityIds, setCityIds] = useState<number[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (!shortName || !fullName || !color || cityIds.length === 0) {
      return;
    }

    const res = await fetch('/api/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shortName, fullName, color, cityIds }),
    });
    const data: { message: string; list: List; rows: Row[] | { message: string } } =
      await res.json();
    if (data.message === 'success') {
      dispatch({ type: 'lists/add', payload: data.list });
      dispatch({ type: 'rows/add', payload: data.rows });
      setShortName('');
      setFullName('');
      setColor('');
      setCityIds([]);
      navigate('/');
    }
  }

  return (
    <div className="createList">
      <h2>Новый список городов</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formdiv">
          <label htmlFor="shortName">
            <p>короткое имя списка</p>
          </label>
          <input
            type="text"
            className="input"
            name="shortName"
            id="shortName"
            value={shortName}
            onChange={(e) => setShortName(e.target.value)}
          />
        </div>

        <div className="formdiv">
          <label htmlFor="fullName">
            <p>длинное имя списка</p>
          </label>
          <input
            type="text"
            className="input"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="formdiv">
          <label htmlFor="color">
            <p>цвет списка</p>
          </label>
          <select
            name="color"
            className="input"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            {colours.map((colour) => (
              <option
                className="input"
                key={colour}
                value={colour}
                style={{ backgroundColor: colour, color: 'white' }}
              >
                {colour}
              </option>
            ))}
          </select>
        </div>

        <div className="formdivcities">
          <label htmlFor="cities"></label>
          <div className="city-list" style={{ maxHeight: '180px', overflowY: 'scroll' }}>
            {cities.map((city) => (
              <div key={city.id} className="city-item">
                <div className="city-cbox">
                  <input
                    type="checkbox"
                    id={city.id.toString()}
                    name={city.name}
                    value={city.id}
                    onChange={(e) => setCityIds([...cityIds, Number(e.target.value)])}
                  />
                </div>
                <div className="city-name">
                  <label htmlFor={city.id.toString()} style={{ fontSize: '20px' }}>
                    {city.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="button" onClick={() => navigate('/')}>
            Отмена
          </button>
          <button type="submit" className="button">
            ОК
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateList;
