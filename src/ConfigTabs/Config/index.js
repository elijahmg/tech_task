import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { TextField, Button } from "@material-ui/core";

import './style.css';

class Config extends Component {
  static propTypes = {
    saveObjAndChangeTab: PropTypes.func,
  };

  state = {
    input: '{}',
  };

  render() {
    const { input } = this.state;

    return (
      <div className="configWrap">
        <TextField
          value={input}
          onChange={(e) => this.setState({ input: e.target.value })}
          multiline
          variant="outlined"
          label="Input for your object"
          classes={{ root: "textField" }}
          rows="30"
        />
        <div className="buttonWrap">
          <Button
            variant="contained"
            onClick={() => this.props.saveObjAndChangeTab(input)}
          >Apply</Button>
        </div>
      </div>
    );
  }
}

export default Config;
