import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
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
      <div>
        {this.state.isLoading ? "Loading..." : this.state.movies.map(movie =>{
          return <Movie id={movie.id} 
                        title={movie.title} 
                        summary={movie.summary} 
                        year={movie.year} 
                        poster={movie.medium_cover_image}>
                 </Movie>
        })}
      </div>
    )
  }
}
export default App;