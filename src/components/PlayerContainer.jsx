import React from 'react'
import Circle from './Circle'

class PlayerContainer extends React.Component {

    render() {


        return (


            
                 <div className= {this.props.firstDiv}>
                    <div className={this.props.secondDiv}>
                      <div >
                        <Circle circleColor={this.props.playerTokens[0] ? "#4646e8" : "black"} />
                        <Circle circleColor={this.props.playerTokens[1] ? "#4646e8" : "black"} />
                      </div>

                      <div >
                        <Circle circleColor={this.props.playerTokens[2] ? "#4646e8" : "black"} />
                        <Circle circleColor={this.props.playerTokens[3] ? "#4646e8" : "black"} />
                      </div>
                    </div>
                    
                  </div>

                  

        
        )
    }
}





export default PlayerContainer