import React, { Component } from 'react';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Players from "./players.json"
import Card from "./components/Card";
import './App.css';

let answers = [];

class App extends Component {
  state = {

    message: `Click an image to Begin`,
    score: 0,
    topscore: 0,
    Players,
    color:"",


  };



  componentDidMount() {
    this.Shufflearray();
    this.setState({color:"col-5 text-center"})
  }

  Shufflearray = () => {;
    let arr = this.state.Players;
    let i;
    let j;
    let temp = [];
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    //console.log(arr);
    this.setState({ Players: arr })

  };


  playGame = id => {
    //console.log("El id seleccionado es " + id);
    //* Busca que el valor del jugador no este en array de los ya selecionados
    //console.log("El index of es " + answers.indexOf(id));

  
    if (answers.indexOf(id) < 0) {
      //*Mete la respuesta a un array
      answers.push(id);
     // console.log("el array es " + answers);
      this.setState({message:"You guessed correctly"})
      this.setState({ score: this.state.score + 1 })
      this.setState({color:"col-5 text-center message"});
     // this.setState({color:"#fff"});
      this.Shufflearray();
      setTimeout(()=>{
        console.log("Entro")
        this.setState({color:"col-5 text-center"})
      },2000)
      

      if (this.state.topscore <= this.state.score) {

        this.setState({ topscore: this.state.topscore + 1 })

      }
    }
    else {
      this.setState({message:"You guessed incorrectly"});
      this.setState({color:"col-5 text-center wrong"});
      this.setState({score:0});
      this.Shufflearray();
      answers=[];
      //console.log("Ya lo seleccionaste");
    }

    
  }


  render() {
    return (
      <div>

        <Header
          message={this.state.message}
          score={this.state.score}
          topscore={this.state.topscore}
          color={this.state.color}

        />
        <Intro />
        <div className="container cards">
          <div className="row">
            {this.state.Players.map(player => (
              <Card
                image={player.image}
                key={player.id}
                id={player.id}
                playGame={this.playGame}
                 />
            ))}
          </div>
        </div>

        <div className="blankDiv">
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
