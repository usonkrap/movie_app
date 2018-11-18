import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movieTitle = [
  "trainspotting",
  "Matrix",
  "StarWars",
  "Inception"
]

const movieImage = [
  "https://images-na.ssl-images-amazon.com/images/I/51hapGfPc9L.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51FhdGyJ6DL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._SY550_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51bDICODpZL.jpg"
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitle[0]} poster={movieImage[0]} />
        <Movie title={movieTitle[1]} poster={movieImage[1]} />
        <Movie title={movieTitle[2]} poster={movieImage[2]} />
        <Movie title={movieTitle[3]} poster={movieImage[3]} />
      </div>
    );
  }
}

export default App;
