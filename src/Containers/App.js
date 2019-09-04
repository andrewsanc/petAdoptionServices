import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AnimalsList from '../Components/AnimalsList'
import { dogs } from '../assets/data/dogs.json';
import AnimalPicture from '../Components/AnimalPicture';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: dogs,
      selected: null,
      showModal: false
    }
  }

  handleModalShow = (index) => {
    this.setState({ showModal: true });
    this.setState({ selected: dogs[index] });
  }

  handleModalClose = () => {
    this.setState({ showModal: false });
  }
  
  render() { 
    return (
      <div>
        <Header />
        <AnimalsList dogs={dogs} showModal={this.handleModalShow} />
        {this.state.showModal && <AnimalPicture selectedDog={this.state.selected} show={this.state.showModal} closeModal={this.handleModalClose} />}
        <Footer />
      </div>
    );
  }
}
 
export default App;