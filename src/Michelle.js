import React from 'react';

function Michelle(props) {
    return (
        <div className='cardView'>
        <div className="card">
          <div className="cardImage">
            <img src="https://img.pokemondb.net/artwork/clefairy.jpg" />
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

export default Michelle;