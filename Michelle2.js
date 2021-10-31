import React from 'react';

function Michelle(props) {
    return (
        <div className='cardView'>
        <div className="card">
          <div className="cardImage">
            <img src="https://www.bing.com/th?id=AMMS_7b9ddf692c6df64d86bbe4e96ef46a83&w=183&h=183&c=8&rs=1&o=5&dpr=1.25&pid=3.1&rm=2" />
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

export default Michellee;