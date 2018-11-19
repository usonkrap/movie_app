import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  state = {
  }
  // https://reactjs.org/docs/react-component.html
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Trainspotting",
            image: "https://images-na.ssl-images-amazon.com/images/I/51hapGfPc9L.jpg"
          },
          {
            title: "Matrix",
            image: "https://images-na.ssl-images-amazon.com/images/I/51FhdGyJ6DL.jpg"
          },
          {
            title: "Star Wars",
            image: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._SY550_.jpg"
          },
          {
            title: "Inception",
            image: "https://images-na.ssl-images-amazon.com/images/I/51bDICODpZL.jpg"
          },
          {
            title: "Being John Malkovich",
            image: "https://images-na.ssl-images-amazon.com/images/I/5192PHQF6GL.jpg"
          }
        ]
      });
    }, 5000);
  }

  _renderMovies = () => {
    return this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.image} key={index} />
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
