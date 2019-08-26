import React from 'react';

const AnimalsList = ({ dogs, handleClick }) => {
  return (
    <div className="ui stackable four column grid">
      <div className="ui cards" style={{justifyContent: 'space-evenly'}}>
        {renderCards(dogs, handleClick)}
      </div>
    </div>
  );
}

const renderCards = (animals, handleClick) => {
  return animals.map((animal, index) => {
    return (
      <div className="four wide column card" onClick={() => handleClick(index)} key={index}>
        <div className="image">
          <img src={animal.image} alt={animal.source} style={{height: '300px'}} />
        </div>
      </div>
    )
  })
}

export default AnimalsList;