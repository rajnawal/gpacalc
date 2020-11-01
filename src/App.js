import "./App.css";
import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Course from "./Course";

class App extends Component {
  state = { WPoints: 0, first: 0, second: 0, third: 0, fourth: 0, fifth: 0, sixth: 0, arr: ["first", "second", "third", "fourth", "fifth", "sixth"] };
totalUWPoints = () => {
  const total = this.state.first + this.state.second + this.state.third + this.state.fourth + this.state.fifth + this.state.sixth;
  return total;
}
 handleUWCalculation = () => {
    const gpa = (this.totalUWPoints() / 6).toPrecision(3);
    return gpa;
  };

  handleWCalculation = () => {
    const gpa = ((this.totalUWPoints() + this.state.WPoints) / 6).toPrecision(3);
    return gpa;
  };

  weightedCheckbox = (t) => {
    const checked = t.target.checked;
    if (checked === true){
      this.setState({
        WPoints: (this.state.WPoints += 1),
      });
    }
    else{
      this.setState({
        WPoints: (this.state.WPoints -= 1), 
      });
    }
  };

  handleChange = (event) => {
    if (parseInt(event.target.value) >= 0) {
      this.setState({
        [event.target.id]: parseInt(event.target.value)
      });
    } else {
      this.setState({
        [event.target.id]: 0,
      });
    }
  };

  render() {
    return (
      <div className="body" >
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-2 offset-md-3">
              <h2 contenteditable="true" className="text-right" >Period</h2>
            </div>
            <div className="col-md-2 my-1">
              <h2 className="text-center" contenteditable="true" >GPA</h2>
            </div>
            <div className="col-md-3 my-1">
              <h2 contenteditable="true">Weighted</h2>
            </div>
          </div>
        </div>
        {this.state.arr.map(id => (
          <Course
          id={id}
          name = {this.state.arr.indexOf(id)+1}
          onChange={this.handleChange}
          onClick={this.weightedCheckbox}
        />
        ))}
        <h2 className="text-center">
          UW GPA: <span className={this.getClassName()}>{this.handleUWCalculation()}</span> W
          GPA: <span className={this.getClassName()}>{this.handleWCalculation()}</span>
        </h2>
      </div>
    );
  }
  getClassName(){
    let classes = "badge badge-";
    if (this.handleUWCalculation() >= 3.0) classes += "success";
    else if (this.handleUWCalculation() >= 2.0) classes += "warning";
    else if (this.handleUWCalculation() >= 0) classes += "danger";
    return classes;
  }
}

export default App;