import React from "react";
import Image from "../Image";
import Score from "../Score"

class Memory extends React.Component {
  state = {
    order: ["1","2","3","4","5","6","7","8","9"],
    selected: [],
    score: 0,
    topScore: 0
  };
  componentDidMount = () => {
    let _order = this.shuffle(this.state.order);
    this.setState({
      order: _order
    })
  }
  shuffle(array) {
    let _array = array;
    let n = _array.length;
    for (let i = 0; i < n; i++) {
      let r = Math.floor(Math.random() * Math.floor(n));
      let temp = _array[i];
      _array[i] = _array[r];
      _array[r] = temp;
    }
    return _array;
  }
  imageClickHandler = event => {
    let _state = this.state;
    let _name = event.target.alt;
    if (_state.topScore < _state.score) {
      _state.topScore = _state.score
    }
    if (_state.selected.includes(_name) || _state.score === 9) {
      _state.score = 0;
      _state.selected = [];
    } else {
      _state.selected.push(_name);
      _state.score++;
    }
    _state.order = this.shuffle(_state.order);
    this.setState(_state);
  };
  render() {
    const style = {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      width: "600px"
    }
    return (
      <div>
        <h1>Chihuahua Memory Game</h1>
        <ol>
          <li>Click on a chihuahua</li>
          <li>Then click on a different chihuahua</li>
          <li>Game resets if you click on the same chihuahua</li>
          <li>Try to get a Top Score of 9 chihuahuas</li>
        </ol>
        <Score score={this.state.score} topScore={this.state.topScore}/>
        <div style={style}>
          {this.state.order.map(id => {
            return <Image 
              key={id}
              onClick={this.imageClickHandler}
              name={id}
              image={require(`../../images/${id}.jpg`)}
            />
          })}
        </div>
      </div>
    );
  }
}

export default Memory;
