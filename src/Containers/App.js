import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Animals from '../Components/Animals'
import { dogs } from '../assets/data/dogs.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: dogs,
      selected: null
    }
  }

  clickHandler = (index) => {
    console.log('click', index);
  }

  render() { 
    return (
      <div>
        <Header />
        <Animals dogs={dogs} clickHandler={this.clickHandler} />
        <Footer />
      </div>
    );
  }
}
 
export default App;