import React, { Component } from "react";
import ScriptTag from "react-script-tag";
export class Demo extends Component {
  render() {
    return (
      <div>
        <ScriptTag
          isHydrating={true}
          type="text/javascript"
          src="https://cdn.airswap.io/airswap-instant-widget.js"
        />
        <p>testing hot loader</p>
      </div>
    );
  }
}
