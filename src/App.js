import React from 'react';
import MovieCard from '../src/components/movie-card/movie-card.component';
import SearchBox from '../src/components/search/search.component';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      isloadingMovies: true,
      filterText: '',
      movies: []
    }
  }

  componentDidMount(){
    fetch("https://www.omdbapi.com/?apikey=304d4af1&page=1&s='titanic'")
    .then(response => response.json())
    .then(movies => this.setState({movies: movies.Search, isloadingMovies: false}));
  }

   getMovies = (filteredMovies) => {
     return filteredMovies.map((movie) => 
      <MovieCard title={movie.Title} imageUrl={movie.Poster} year={movie.Year} key={movie.imdbID}></MovieCard>
     )
   }

   onHandleSearch = (e) => {
     this.setState({'filterText': e.target.value});
   }

  render(){
    let filteredMovies = [];
    const {filterText, movies}  = this.state;
    filteredMovies = movies.filter((movies) => movies.Year.includes(filterText));
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>OMDB MOVIE LIST</h1>
        </header>
        { !this.state.isloadingMovies ? 
        <React.Fragment>
          <SearchBox onHandleSearch = {this.onHandleSearch}></SearchBox>
          <section className='movie-container'>
              {this.getMovies(filteredMovies)}
          </section>
        </React.Fragment>
        : 
          <h1>Loading Movies ...</h1>
        }
          
      </div>
    );
  }
}

export default App;
