import React, { Component } from "react";

export default class Card extends Component {
  handleDrop = e => {
    e.preventDefault();
    console.log("drop");
    console.log(e.target.id);
    const id = e.dataTransfer.getData("id");
    console.log(id);
    this.props.updateOnDrop(id, e.target.id);
  };

  handleDragStart = e => {
    //e.preventDefault();
    console.log("start");
    e.dataTransfer.setData("id", e.target.id);
  };

  handleDragOver = e => {
    e.preventDefault();
    console.log("over");
  };

  render() {
    const { list, status } = this.props;

    return (
      <div
        className="column"
        id={status}
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
      >
        <h2>{status.toUpperCase()}</h2>
        {list.map(item => (
          <div
            className="card"
            draggable
            key={item.id}
            id={item.id}
            onDragStart={this.handleDragStart}
            onDrop={this.handleDrop}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}
