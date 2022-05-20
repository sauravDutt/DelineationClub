import React from 'react';

class Square extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

    render() {
      return (
        <button 
          className="square" 
          onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }
}
  
class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      // const status = 'Next player: X';
  
      return (
        <div className="gameEnv">
          <h1 className="winNft"><span className="otherFont">Win</span> Random DelineationClub NFTs</h1>
          
        </div>
      );
    }
}
  
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}

export default Game;
  