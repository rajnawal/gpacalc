import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class Course extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1 offset-md-4">
              <h2>{this.props.name}</h2>
            </div>
            <div className="col-md-2 mx-4">
              <input
                type="text"
                pattern="[0-9]*"
                maxLength="1"
                className="custom-input mr-sm-2"
                id={this.props.id}
                onChange={this.props.onChange}
              ></input>
            </div>
            <div className="col-md-4 my-1">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input
                  style={{ height: "30px", width: "30px" }}
                  type="checkbox"
                  onClick={this.props.onClick}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
