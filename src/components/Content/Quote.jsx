import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <section className="section pb-0 bg-gradient-secondary">
        <div className="blockquote-wrapper">
          <div className="blockquote">
            <h1>
              It’s <span style={{ color: "#5e72e4" }}>your road</span>, and
              yours alone,{" "}
              <span style={{ color: "#5e72e4" }}>others may walk</span> it with
              you, but{" "}
              <span style={{ color: "#5e72e4" }}>
                no one can walk it for you
              </span>
              .
            </h1>
            <h4>
              <em>-Rumi</em>
            </h4>
          </div>
        </div>
      </section>
    );
  }
}
