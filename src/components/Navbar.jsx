import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { useRef } from 'react';


export default function Navbar(props) {

    const inputColumn = useRef();

  return (
    <nav>
        <span> Mon Todo-React <button onClick={props.reinit}>Reinit</button></span>
        <div>
        <input ref={inputColumn} type="text" className="text" /><button onClick={e => props.onCreateColumn(e, inputColumn)}>Ajouter une colonne</button>
        </div>
        <span>Le lien vers le projet : <a href='https://github.com/lucien-zak/tdl-react'><AiFillGithub/></a></span>
    </nav>
  )
}
