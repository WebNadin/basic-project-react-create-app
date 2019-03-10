import React, { Component } from 'react';
//import './main.scss';
import UserAPI from './UserAPI';
import { Link } from 'react-router-dom'


const FullRoster = () => (
    <div>
        <ul>
            {
                UserAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default FullRoster;