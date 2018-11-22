import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  state = {
  }
  componentDidMount(){
    this._getMoveis();
  }

  _getMoveis = async () => {
    const movies = await this._callApi();
    console.log(movies)
    this.setState({
      movies
    });

  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(responseJson => responseJson.data.movies)
    .catch(err => console.log(err));
  }

  _renderMovies = () => {
    return this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} />
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
