import React, { Component } from 'react';
import './Track';

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
  }
  renderAction() {
    if (this.props.isRemoval) {
      this.removeTrack();
    } else {
      this.addTrack();
    };
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track, true);
  }

  render() {
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action" onClick={this.renderAction}>+</a>
        //{this.props.shouldAdd && <a className="Track-action" onClick={this.addTrack}>+</a>}
        //{!this.props.shouldAdd && <a className="Track-action" onClick={this.removeTrack}>-</a>}
      </div>
    )
  }
}

export default Track;
