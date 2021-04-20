import React from "react";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      numCase: 0
    }

    this.lancerDee = this.lancerDee.bind(this)
  }

  lancerDee() {
    const dee = Math.floor(Math.random() * (6 - 1)) + 1;

    this.setState({
      numCase: this.state.numCase + dee
    })
  }

  // Bonus
  // go() {
  //   if (dee === 6) {


  //   } else {
  //     window.alert("noob")
  //   }
  // }

  render() {

    console.log("this.state.numCase", this.state.numCase);

    return (
      <div>
        <div id="jeu">
          <div id="col1">
            <i class="fas fa-circle" style={{color: this.state.numCase == 1 ? "white" : "black"}}></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
          </div>

          <div id="col2">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
          </div>

          <div id="col3">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
          </div>

          <div id="col4">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
          </div>

        </div>

        <div>
            <button onClick={this.lancerDee}>Lancer le Dé</button>
            <p></p>
        </div>
      </div>
    )
  }


}

export default App

