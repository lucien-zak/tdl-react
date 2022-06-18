import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { useRef } from 'react';

export default function Navbar() {
  return (
    <nav>
        <span> Mon Todo-React </span>
        <div>
        <input type="text" className="text" /><button>Ajouter une colonne</button>
        </div>
        <span>Le lien vers le projet : <a href='#'><AiFillGithub/></a></span>
    </nav>
  )
}
