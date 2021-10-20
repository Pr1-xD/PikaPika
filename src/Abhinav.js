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
            <h4>{props.name}</h4>
            <p><strong>Height</strong> {props.h}</p>
            <p><strong>Category</strong> {props.cat}</p>
            <p><strong>Weight</strong> {props.w} </p>
            <p><strong>Abilities</strong> {props.abilities}</p>
          </div>
        </div>
      </div>
    );
}
export default Abhinav;