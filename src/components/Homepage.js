import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DisplayTop from './DisplayTop';


export class Homepage extends Component {
  constructor(props){
    super(props)
    this.state={
      movieList: [],
      genre: {
        value: 0,
        id: 9999
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  
  //https://api.themoviedb.org/3/discover/movie?api_key=265b40c4d4bf685edba021d58ccb3131&with_genres=27


 
  componentDidMount(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=265b40c4d4bf685edba021d58ccb3131&language=en-US&page=1')
    .then(res => {
      const movieList = []
      res.data.results.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });
      for(let i=0; i<10; i++){
        movieList.push(res.data.results[i])
      }
      console.log(movieList)
      this.setState({ movieList })
    })
  }
  
  componentDidUpdate(prevProps, prevState){
    if (this.state.genre.id !== prevState.genre.id) {
      if(this.state.genre.id === 9999){
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=265b40c4d4bf685edba021d58ccb3131&language=en-US&page=1')
        .then(res => {
          const movieList = []
          res.data.results.sort(function (a, b) {
            return b.vote_average - a.vote_average;
          });
          for(let i=0; i<10; i++){
            movieList.push(res.data.results[i])
          }
          console.log(movieList)
          this.setState({ movieList })
        })
      }
      else{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=265b40c4d4bf685edba021d58ccb3131&with_genres=${this.state.genre.id}`)
        .then(res => {
          const movieList = []
          res.data.results.sort(function (a, b) {
            return b.vote_average - a.vote_average;
          });
          for(let i=0; i<10; i++){
            movieList.push(res.data.results[i])
          }
          console.log(movieList)
          this.setState({ movieList })
        })
      }
      
    }
    
  }
  
  handleChange(event, newValue){
    const genre = {
      value: '',
      id: 0
    }
    switch(newValue){
      case 0:
        // Popular
        genre.value = newValue;
        genre.id = 9999;
        break;
      case 1:
        // Horror
        genre.value = newValue;
        genre.id = 27;
        break;
      case 2:
        // Action
        genre.value = newValue;
        genre.id = 28;
        break;
      case 3:
        // Thriller
        genre.value = newValue;
        genre.id = 53;
        break;
      case 4:
        // Comedy
        genre.value = newValue;
        genre.id = 35;
        break;      
    }
    this.setState({ genre });
  }

  render() {
    return (
      <div>
      <Paper>
      <Tabs
        value={this.state.genre.value}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Popular" />
        <Tab label="Horror" />
        <Tab label="Action" />
        <Tab label="Thriller" />
        <Tab label="Comedy" />
      </Tabs>
      </Paper>
      <DisplayTop name={this.state.movieList}/>
      </div>
    )
  }
}

export default Homepage
