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

  constructor() {
    super();

    this.saveObjAndChangeTab = this.saveObjAndChangeTab.bind(this);
  }


  saveObjAndChangeTab(objAsStaring) {
    // console.log('objAsStaring', objAsStaring);
    const jsonString = objAsStaring
      .replace(/'/g, '')
      .replace(/([A-Za-z])\w+/g, (g) => `"${g}"`);
    console.log('objAsStaring', jsonString);
    const jsonConfig = JSON.parse(jsonString);

    this.setState({ value: 1, jsonConfig });
  }

  render() {
    const { value, jsonConfig} = this.state;

    return (
      <div className="wrap">
        <Tabs value={value} onChange={(e, newValue) => this.setState({ value: newValue })} component="div">
          <Tab label="Config"/>
          <Tab label="Result"/>
        </Tabs>
        <div>
          {value === 0 && <Config saveObjAndChangeTab={this.saveObjAndChangeTab}/>}
          {value === 1 && <Result obj={jsonConfig}/>}
        </div>
      </div>
    )
  }
}

export default ConfigTabs;
