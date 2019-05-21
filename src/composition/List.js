import React from 'react';
import './List.css';

function List(props) {
  return (
    <div className="session-participant">
      <img src={props.avatar} alt={props.name} width="40px"/>
      {props.name}
      {props.inSession ? (
        <div className="inSession" />
      ) : (
        <div className="notInSession" />
      )}

    </div>
  )  
}

export default List;