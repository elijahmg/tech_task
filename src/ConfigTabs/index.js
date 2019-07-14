import React, { Component } from 'react';
import { Tabs, Tab } from '@material-ui/core';

import Config from './Config';
import Result from './Result';

import './style.css';

class ConfigTabs extends Component {
  state = {
    value: 0,
    jsonConfig: {},
  };

  constructor(props) {
    super(props);

    this.saveObjAndChangeTab = this.saveObjAndChangeTab.bind(this);
  }

  saveObjAndChangeTab(objAsStaring) {
    const jsonString = objAsStaring
      .replace(/'/g, '')
      .replace(/(\w+\s*\w+)/g, (g) => `"${g}"`);

    const jsonConfig = JSON.parse(jsonString);

    this.setState({ value: 1, jsonConfig });
  }

  render() {
    const { value, jsonConfig } = this.state;

    return (
      <div>
        <div className="wrapTabHeader">
          <Tabs value={value} onChange={(e, newValue) => this.setState({ value: newValue })} component="div">
            <Tab label="Config"/>
            <Tab label="Result"/>
          </Tabs>
        </div>
        <div>
          {value === 0 && <Config saveObjAndChangeTab={this.saveObjAndChangeTab}/>}
          {value === 1 && <Result obj={jsonConfig}/>}
        </div>
      </div>
    )
  }
}

export default ConfigTabs;
