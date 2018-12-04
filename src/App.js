import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        name: "design",
        status: "done"
      },
      {
        id: 2,
        name: "layout",
        status: "wip"
      },
      {
        id: 3,
        name: "functionality",
        status: "wip"
      },
      {
        id: 4,
        name: "sales",
        status: "indesign"
      },
      {
        id: 5,
        name: "money",
        status: "waiting"
      }
    ]
  };

  updateOnDrop = (id, status) => {
    const tasks = this.state.tasks.map(item => {
      if (item.id === +id) {
        item.status = status;
      }
      return item;
    });
    console.log(tasks);
    this.setState({
      tasks: [...tasks]
    });
  };
  render() {
    const { tasks } = this.state;
    const statuses = tasks.map(item => item.status);
    const uniqueStatuses = Array.from(new Set(statuses));
    return (
      <div className="App">
        <h3>Trello</h3>
        <div className="container">
          {uniqueStatuses.map((status, index) => (
            <Card
              key={index}
              status={status}
              list={tasks.filter(item => item.status === status)}
              updateOnDrop={this.updateOnDrop}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
