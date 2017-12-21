import React, { Component } from 'react';

export default class PicCompare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picUrls: [],
      curPics: [],
      showedPairs: [[]],
      picRtngs: {}
    };
    this.getNextPair = this.getNextPair.bind(this)
  };

  componentDidMount() {
    fetch('/api/pictures')
      .then(response => response.json())
      .then(data => this.setState({ picUrls: data }));
  }

  getNextPair() {
    const newPair = this.state.curPics.map(x => {
      return x + 2
    })
    this.setState({curPics: newPair})
  }

  render() {
    return (
      <div>
        <img src={this.state.picUrlsp[curPics[0]]} alt="First pic"> <img src={this.state.picUrlsp[curPics[1]]} alt="Second pic">
      </div>
    )
  };

}
