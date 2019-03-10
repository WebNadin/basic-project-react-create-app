import React, { Component } from 'react';
//import './main.scss';

import UserAPI from './UserAPI';

const User = (props) => {
    const user = UserAPI.get(
        parseInt(props.match.params.number, 10)
    );
    if (!user) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>Имя:{user.name}, id:(#{user.number})</h1>
            <h2>number:{user.position}</h2>
        </div>
    )
};

export default User;