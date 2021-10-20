import React from 'react';
import './App.css';

function Abhinav(props) {
    return (
        <div className='cardView'>
        <div className="card">
          <div className="cardImage">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" />
          </div>
          <div className="cardText">
            <h4>Charizard</h4>
            <p><strong>Height</strong> 5'07"</p>
            <p><strong>Category</strong> Flame</p>
            <p><strong>Weight</strong> 199.5 lbs</p>
            <p><strong>Abilities</strong> Blaze</p>
          </div>
        </div>
      </div>
    );
}

export default Abhinav;