import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css"

class Home extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async() => {
    const{ data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
  
    this.setState({movies, isLoading :false })
  }
    componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
    <section className="container">
      {isLoading ?(
        <div className="loader">
          <span className="loader__text">
            <div className="loadingBox box">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </span>
        </div>
      ) : (
        <div className="movies">{
          movies.map(movie=>{
            return <Movie  
            id={movie.id} key={movie.id}
            title={movie.title} year={movie.year} genres={movie.genres}
            summary={movie.summary} poster={movie.medium_cover_image}/>;
          })}
        </div>
      )}
    </section>
    )
  }
}


export default Home;
