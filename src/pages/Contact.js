import React from "react";

const contact = () => {
  return (
    <div className="contact">
      <div className="contact__card">
        <table>
          <tr>
            <td>Email:</td>
            <td>
              <a href="mailto:sahilrajdk@gmail.com">sahilrajdk@gmail.com</a>
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>0424475542</td>
          </tr>
        </table>
        <div className="contactlinks">
          <a
            href="https://github.com/sahilrajdk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-2x fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
