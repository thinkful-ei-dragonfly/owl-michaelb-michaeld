import React from 'react';
import List from './List';

function App(props) {
  const participants = props.store;
  return (
    <div className="app-instance">
      <div className="participant-list">
        {participants.map(participant => (
          <List key={participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} />)
        )}
      </div>
    </div>
  );
}

export default App;
