import React from 'react'
import MovieCard from './MovieCard'

class MovieList extends React.Component{

    constructor(){
        super();
        this.state={
           
           movies:[
            {
                title:"The avanger",
                price:199,
                rating:8.9,
                plot:"Supernaturals power shows on the movie",
                stars:0,
                fav:false,
                cart:false
            },
            {
                title:"The avanger",
                price:199,
                rating:8.9,
                plot:"Supernaturals power shows on the movie",
                stars:0,
                fav:false,
                cart:false
            },
            {
                title:"The avanger",
                price:199,
                rating:8.9,
                plot:"Supernaturals power shows on the movie",
                stars:0,
                fav:false,
                cart:false
            }
           ]
        }
    }
    handleIncStar=(movie)=>{
        const {movies}=this.state;
        const mid =movies.indexOf(movie)
        if(movies[mid].stars>=5){
            return null;
        }
        movies[mid].stars += 0.5
        this.setState({
            movies:movies
        })
    }
    handleDeccStar=(movie)=>{
        const {movies}=this.state;
        const mid =movies.indexOf(movie)
        if(movies[mid].stars<=0){
            return null;
        }
        movies[mid].stars -= 0.5
        this.setState({
            movies:movies
        })
    }
    render(){
        // const {plot,rating,price,title,stars,fav,cart}=this.state.movies;
        const {movies}=this.state;
        return(
            <>
            {movies.map((movie)=><MovieCard movies={movie} decStars={this.handleDeccStar} addStars={this.handleIncStar}/>)}

            </>
        )
    }
}

export default MovieList