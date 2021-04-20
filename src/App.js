import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      numCase: 0,
      numCase2: 0
    }

    this.lancerDee = this.lancerDee.bind(this)
  }

  lancerDee() {
    const dee = Math.floor(Math.random() * (6 - 1)) + 1;

    this.setState({
      numCase: this.state.numCase + dee
    })
  }
  lancerDee2() {
    const dee = Math.floor(Math.random() * (6 - 1)) + 1;

    this.setState({
      numCase2: this.state.numCase2 + dee
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
            <i class="fas fa-circle" style={{color: this.state.numCase == 2 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 3 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 4 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 5 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 6 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 7 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 8 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 9 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 10 ? "white" : "black"}}></i>
          </div>

          <div id="col2">
            <i class="fas fa-circle" style={{color: this.state.numCase == 11 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 12 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 13 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 14 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 15 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 16 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 17 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 18 ? "white" : "black"}}></i>
          </div>

          <div id="col3">
            <i class="fas fa-circle" style={{color: this.state.numCase == 19 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 20 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 21 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 22 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 23 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 24 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 25 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 26 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 27 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 28 ? "white" : "black"}}></i>
          </div>

          <div id="col4">
            <i class="fas fa-circle" style={{color: this.state.numCase == 29 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 30 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 31 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 32 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 33 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 34 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 35 ? "white" : "black"}}></i>
            <i class="fas fa-circle" style={{color: this.state.numCase == 36 ? "white" : "black"}}></i>
          </div>

        </div>

        <div>
            <button className="b1  " onClick={this.lancerDee}>Player 1</button>
            <p></p>
        </div>
        <div>
            <button className="b2" onClick={this.lancerDee2}>Player 2</button>
            <p></p>
        </div>
            
        {/* <div>
            <button onClick={this.lancerDee}>Lancer le Dé</button>
            <p></p>
        </div> */}
      </div>
    )
  }


}

export default App

