import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export const App = (
  // write your React Code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <div>
        <h3>Emmanuel</h3>
        <h4>emmanuel@email.com 📞23423434</h4>
        <button>delete</button>
      </div>
      <div>
        <h3>Johana</h3>
        <h4>johana@email.com 📞123123</h4>
        <button>delete</button>
      </div>
      <div>
        <h3>Lucas</h3>
        <h4>lucas@emal.com 📞6764563456</h4>
        <button>delete</button>
      </div>
      <div>
        <h3>Marie</h3>
        <h4>marie@rm.com 📞12125465</h4>
        <button>delete</button>
      </div>
      <div>
        <h3>Pedro</h3>
        <h4>pedro@rn.com  📞346345711234</h4>
        <button>delete</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
