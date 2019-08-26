import React from 'react';

const Animals = ({ dogs, clickHandler }) => {
  return (
    <div className="ui stackable four column grid">
      <div className="ui cards" style={{justifyContent: 'space-evenly'}}>
        {renderCards(dogs, clickHandler)}
      </div>
    </div>
  );
}


const renderCards = (animals, clickHandler) => {
  return animals.map((animal, index) => {
    return (
      <div className="four wide column card" onClick={clickHandler(index)} key={index}>
        <div className="image">
          <img src={animal.image} alt={`${animal.source}`} style={{height: '300px'}} />
        </div>
      </div>
    )
  })
}

export default Animals;