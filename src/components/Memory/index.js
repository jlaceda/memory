import React from "react";
import Image from "../Image";
import Score from "../Score"

class Memory extends React.Component {

  state = {
    selected: [],
    score: 0,
    topScore: 0
  };

  imageClickHandler = event => {

    let _state = this.state;
    let _name = event.target.alt;

    if (_state.selected.includes(_name)) {

      console.log("game over");

      if (_state.topScore < _state.score) {
        _state.topScore = _state.score
      }

      this.setState({ 
        selected: [],
        score: 0,
        topScore: _state.topScore
      });

    } else {
      
      console.log("update score")
      
      _state.selected.push(_name);
      _state.score++

      this.setState(_state);

    }
  };

  render() {
    return (
      <div>
        <Score score={this.state.score} topScore={this.state.topScore}/>
        <Image 
          onClick={this.imageClickHandler}
          name="test"
          image="https://images.dog.ceo/breeds/retriever-golden/n02099601_1633.jpg"
        />
      </div>
    );
  }
}

export default Memory;
