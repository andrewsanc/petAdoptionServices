import React from 'react';
import './AnimalPicture.css';

const AnimalPicture = ({ show, closeModal, selectedDog }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div className="image content">
          <img className="ui centered medium image" src={selectedDog.image} alt={selectedDog.source} />
        </div>
        <button className="ui primary button" onClick={closeModal}>Close</button>
      </section>
    </div>
  );
}
 
export default AnimalPicture;