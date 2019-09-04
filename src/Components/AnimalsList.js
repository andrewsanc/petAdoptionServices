import React from 'react';

const AnimalsList = ({ dogs, showModal }) => {
  return (
    <div className="ui stackable four column grid">
      <div className="ui cards" style={{justifyContent: 'space-evenly'}}>
        {renderCards(dogs, showModal)}
      </div>
    </div>
  );
}

const renderCards = (animals, showModal) => {
  return animals.map((animal, index) => {
    return (
      <div className="card" onClick={() => showModal(index)} key={index}>
        <div className="image">
          <img src={animal.image} alt={animal.source} style={{height: '300px'}} />
        </div>
      </div>
    )
  })
}

export default AnimalsList;