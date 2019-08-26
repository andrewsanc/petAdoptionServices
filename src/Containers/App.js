import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AnimalsList from '../Components/AnimalsList'
import { dogs } from '../assets/data/dogs.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: dogs,
      selected: null
    }
  }

  handleClick = (index) => {
    console.log('click', index);
  }

  render() { 
    return (
      <div>
        <Header />
        <AnimalsList dogs={dogs} handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}
 
export default App;