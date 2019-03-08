import React from 'react';
import './Friend.css';

const Friend = props => {
  return (
    <div className="Friend">

      <header>
        <h1>{props.friend.name}</h1>
      </header>

      <div className="age">
        <h4>Age:</h4>
        <p>{props.friend.age}</p>
      </div>

      <div className="email">
        <h4>email:</h4>
        <p>{props.friend.email}</p>
      </div>

    </div>
  )
}

export default Friend;
