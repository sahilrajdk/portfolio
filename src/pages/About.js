import React from "react";
import { Link } from "react-router-dom";
const about = () => {
  return (
    <div className="about">
      <div className="name">
        <h2>Hello,I'm Sahil Raj </h2>
        <h4> I'am an aspiring Front End / Full Stack Web developer.</h4>
      </div>

      <div className="intro">
        <h3>A short intro</h3>
        <p>
          Skilled in React Js,JavaScript,REST API's,GraphQL,Node
          Js,MongoDB,Express Js along with HTML and CSS/SASS. Im currently
          looking for junior front end developer / full stack roles in
          Melbourne. Please take a look at my portfolio.Thanks.
        </p>
      </div>
      <div>
        <table className="contactlinks">
          <tr>
            <td>
              <a href="mailto:sahilrajdk@gmail.com">sahilrajdk@gmail.com</a>
            </td>

            <td>0424475542</td>
            <td>
              <a
                href="https://github.com/sahilrajdk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-2x fa-github" />
              </a>
            </td>
            <td>
              <a
                href="https://www.linkedin.com/in/sahilrajdk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-2x fa-linkedin" />
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div className="options">
        <Link className="button" to="/portfolio">
          View Portfolio
        </Link>
      </div>
    </div>
  );
};

export default about;
