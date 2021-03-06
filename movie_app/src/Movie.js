import React from 'react';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';
import './Movie.css';

// The smart component have 'state', but dum component doesn't have 'state'
// use them cautiously.

// used 'stateless functional component' Cuz this component no need any state(no lifecyle). Only return prop.
function Movie({title, poster, genres, synopsis}){
  return(
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
        <LineEllipsis
          text = {synopsis}
          maxLine = '4'
          ellipsis=' ...'
          trimRight
          based0n='letters'
          />
        </div>
      </div>
      
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


function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
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


function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}


// PropTypes check
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;