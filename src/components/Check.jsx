import React from "react";

class Check extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <h2>Checking Page</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{" "}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="/admin">Admin</a>
          </li>
          <li>
            <a href="/check">Check</a>
          </li>
          <li>
            <a href="/">Main</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Check;
