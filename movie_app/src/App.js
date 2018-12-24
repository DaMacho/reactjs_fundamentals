import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/The_Matrix_soundtrack_cover.jpg/220px-The_Matrix_soundtrack_cover.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qrrSKkr5IDPZZgSvoCG7XXm6DXJnWq6IfBMM8SxGjfCIdzx5uQ"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
