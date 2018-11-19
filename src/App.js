import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    title: "trainspotting",
    image: "https://images-na.ssl-images-amazon.com/images/I/51hapGfPc9L.jpg"
  },
  {
    title: "Matrix",
    image: "https://images-na.ssl-images-amazon.com/images/I/51FhdGyJ6DL.jpg"
  },
  {
    title: "StarWars",
    image: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._SY550_.jpg"
  },
  {
    title: "Inception",
    image: "https://images-na.ssl-images-amazon.com/images/I/51bDICODpZL.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.image} />
        })}
      </div>
    );
  }
}

export default App;
