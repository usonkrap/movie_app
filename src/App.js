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
      movies  // movies: movies
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
      return <Movie 
        title={movie.title_english}
        poster={movie.medium_cover_image}
        synopsis={movie.synopsis}
        genres={movie.genres}
        key={movie.id}
      />
    })
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
