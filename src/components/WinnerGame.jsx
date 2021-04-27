import React from 'react'
import Winner from "../assets/pic/winner.gif"



class WinnerGame extends React.Component {

    render() {

        if (this.props.player1Tokens.indexOf(false) === -1) {

            return (


                <div className="winner" >

                    <p className="pWins"> <span className="spanP1">Player 1</span> Wins !</p>
                    <div className="offset-3" style={{
                        background: `url(${Winner})`, height: `${500}px`,
                        backgroundRepeat: "no-repeat"
                    }} />
                </div>)

        } else if (this.props.player2Tokens.indexOf(false) === -1) {
            return (<div className="winner" >
                <p className="pWins"> <span className="spanP2">Player 2</span> Wins !</p>
                <div className="offset-3" style={{
                    background: `url(${Winner})`, height: `${500}px`,
                    backgroundRepeat: "no-repeat"
                }} />

            </div>
            )
        }
    }

}



export default WinnerGame