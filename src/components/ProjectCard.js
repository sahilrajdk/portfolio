import React, { Component } from "react";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <div className="project__card">
        <div className="project__card-center">
          <h3>{this.props.title}</h3>
          {this.props.children}
        </div>
        <div className="project__card-right">
          <h2>Tech Stack</h2>

          <ul>
            {this.props.techstack.map((tech, index) => {
              return <li key={index}>{tech}</li>;
            })}
          </ul>

          <div className="projectlinks">
            <a
              href={this.props.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-2x fa-github" />
            </a>
            <div className="liveapp">
              <a
                href={this.props.heroku}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live App
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
