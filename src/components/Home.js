import React, { Component } from 'react';
//import './main.scss';
import UserAPI from './UserAPI';
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
      test
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

export default Home;