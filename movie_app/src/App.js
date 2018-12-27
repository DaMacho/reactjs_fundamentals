import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() (== true) -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {

  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()  // line will wait until the function finish work and return value
    this.setState({
      movies : movies
    })
  }

  // 
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    // console.log('did render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;

/*
setTimeout(() => {
  this.setState({
      // ...this.state.movies,
      movies: [
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
        {
          title: "Transformer",
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Transformers07.jpg/220px-Transformers07.jpg"
        },
      ]
      // ...this.state.movies,
  })  
}, 2000)
*/