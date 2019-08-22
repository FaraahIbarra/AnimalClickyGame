import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import animal from "./animal.json";
import "./App.css";

class App extends Component {
  state = {
    animal,
    clickedAnimal: [],
    score: 0
  };

  imageClick = event => {
    const currentAnimal = event.target.alt;
    const AnimalAlreadyClicked =
      this.state.clickedAnimal.indexOf(currentAnimal) > -1;

    if (AnimalAlreadyClicked) {
      this.setState({
        animal: this.state.animal.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedAnimal: [],
        score: 0
      });
        alert("You lose. Play again?");

    } else {
      this.setState(
        {
          animal: this.state.animal.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedAnimal: this.state.clickedAnimal.concat(
            currentAnimal
          ),
          score: this.state.score + 1
        },
     
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              animal: this.state.animal.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedAnimal: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.animal.map(animal => (
            <FriendCard
              imageClick={this.imageClick}
              id={animal.id}
              key={animal.id}
              image={animal.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;