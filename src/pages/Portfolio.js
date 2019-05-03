import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";

class Portfolio extends Component {
  state = {
    display: "full"
  };

  setFullStackProjs = () => {
    this.setState({
      display: "full"
    });
  };

  setHtmlProjs = () => {
    this.setState({
      display: "html"
    });
  };

  render() {
    return (
      <div className="portfolio">
        <ul className="portfolio__links">
          <li
            className={
              this.state.display === "full" ? "liactive" : "linotactive"
            }
            onClick={this.setFullStackProjs}
          >
            <span>Full Stack Projects</span>
          </li>
          <li
            className={
              this.state.display === "html" ? "liactive" : "linotactive"
            }
            onClick={this.setHtmlProjs}
          >
            <span>HTML,CSS Projects</span>
          </li>
        </ul>
        {this.state.display === "full" && (
          <section>
            <h3>Full Stack Projects</h3>
            <ProjectCard
              title="LINKUP! - Developer Connect"
              techstack={[
                "React Js and Redux",
                "Express Js",
                "MongoDB",
                "Node Js"
              ]}
              github="https://github.com/sahilrajdk/devconnect"
              heroku="https://calm-depths-28979.herokuapp.com/"
            >
              <p>
                A social app for all the developers out there.Make Profiles and
                connect with like minded people.Ask questions via posts and get
                feedback through comments.
              </p>
            </ProjectCard>
            <ProjectCard
              title="Bullet Garage - App for creating Jobcards for service vehicles (Ongoing Project)"
              techstack={[
                "React Js",
                "Apollo Client",
                "GraphQL Server",
                "Express Js",
                "MongoDB",
                "Node Js"
              ]}
              github="https://github.com/sahilrajdk/bulletgarageapp"
              heroku="https://agile-scrubland-21449.herokuapp.com/"
            >
              <p>
                Developing an App for a client in Chennai,India. The Bullet
                Garage is a Royal Enfield Motorcyle Service center. This app is
                used for modernising jobcard creation,reducing paper usage.
                Built using React Js, GraphQL server and Apollo Client.
              </p>
            </ProjectCard>
          </section>
        )}
        {this.state.display === "html" && (
          <section>
            <h3>HTML,CSS Projects</h3>
            <ProjectCard
              title="Website template for Adventure Packages"
              techstack={["HTML", "SASS"]}
              github="https://github.com/sahilrajdk/Adventure_Sass_website"
              heroku="https://sahilrajdk.github.io/Adventure_Sass_website/"
            >
              <p>
                Basic website built using HTML ,CSS with SASS.This Project is a
                showcase of my basic web develepor skills.
              </p>
            </ProjectCard>
            <ProjectCard
              title="Website template for Booking Hotels"
              techstack={["HTML", "SASS"]}
              github="https://github.com/sahilrajdk/booking-website"
              heroku="https://sahilrajdk.github.io/booking-website/"
            >
              <p>
                Basic website built using HTML ,CSS with SASS.This Project is a
                showcase of my basic web develepor skills.
              </p>
            </ProjectCard>
          </section>
        )}
      </div>
    );
  }
}

export default Portfolio;
