import React from 'react';
import {Link} from 'react-router-dom';

import "./styles.css";

export default function Header() {

    return(

        <header>
            {/* <a href="" class="Logo">Logo</a> */}
            <ul className="nav">
                <li><Link to="">Home</Link></li>
                <li className="hover-me">
                    <Link to="">API´s</Link>

                    <li className="fade">                        
                        <Link to="/1" className="subMenu">Linguagens</Link>
                        <Link to="/2" className="subMenu">Produtos</Link>
                        <Link to="/3" className="subMenu">BTC</Link>
                        <Link to="/4" className="subMenu">Produtos de Beleza</Link>
                    </li>
                </li>
                <li><Link to="">Sobre </Link></li>
            </ul>
        </header>
    )
}