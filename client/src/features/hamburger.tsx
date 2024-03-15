import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';

function HamburgerMenu({ listId }: { listId: number}): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate = useNavigate()
const dispatch = useAppDispatch()
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };


async function removeList() : Promise<void> {console.log( listId);

    const res = await fetch(`/api/lists/${listId}/remove`, {
      method: 'DELETE',
    })
    const data: { message: string } = await res.json()
    if (data.message === 'success') {
        dispatch({type: 'lists/remove', payload: listId})
        navigate('/')
    }
}

  return (
    <div className="hamburger-menu">
      <button type="button" className="hamburger-button" onClick={toggleMenu}>
        <p>☰</p>
      </button>
      {isMenuOpen && (
        <div className="menu-items">
            <button type='button' className="menu-item" onClick={() => navigate('/') } >На главную</button>
          <button type='button' className="menu-item" onClick={() => navigate(`/lists/edit/${listId}`) }  >Изменить</button>
          <button type='button' className="menu-item" onClick={() => removeList()} >Удалить</button>
          <button type='button' className="menu-item" onClick={() => setIsMenuOpen(false)}>Отмена</button>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;