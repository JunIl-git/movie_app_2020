import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading : true,
      movies : [],
    }
  }
  getMovies = async () => {
    const Movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    const arrayMovies = Movies.data.data.movies;
    this.setState({
      movies : arrayMovies,
      isLoading : false,
    })

  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    return(

      <section className="container">
        {this.state.isLoading ? 
          (
            <div className="loader">
              <div className="loader__text">
                <div className="loadingBox box">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="movies">
              {this.state.movies.map(movie =>{
              return <Movie key = {movie.id}
                            id={movie.id} 
                            title={movie.title} 
                            summary={movie.summary} 
                            year={movie.year} 
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                            >
                     </Movie>
              }
              )}
            </div>
          )
        }
      </section>
    )
  }
}
export default Home;