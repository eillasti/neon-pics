import React from 'react';
import ReactDOM from 'react-dom';
import PopUp from './PopUp.jsx';
import PicCompare from './PicCompare.jsx';

function App() {
  return (
    <div>
      <PopUp />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
