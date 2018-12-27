import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// The smart component have 'state', but dum component doesn't have 'state'
// use them cautiously.

// used 'stateless functional component' Cuz this component no need any state(no lifecyle). Only return prop.
function Movie({title, poster}){
  return(
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  )
}
/*
class Movie extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
*/


function MoviePoster({poster}){
  return (
    <img src={poster} alt="Movie Poster" />
  )
}
/*
class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render(){
    return (
      <img src={this.props.poster} alt="Movie Poster" />
    )
  }
}
*/


// PropTypes check
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;