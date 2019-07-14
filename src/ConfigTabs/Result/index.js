import React, { Component } from 'react'
import PropTypes from "prop-types";

import './style.css';

class Result extends Component {
  static propTypes = {
    obj: PropTypes.object,
  };

  formButtons(value) {
    return <input type="submit" value={value} className="submit"/>
  }

  field(item) {
    const type = item.type;
    const { label } = item;

    let fieldType = '';

    switch (type) {
      case 'numberfield':
        fieldType = 'number';
        break;
      case 'textarea':
        return (
          <div className="wrapField">
            <div className="label">
              <span className="label">{label}</span>
            </div>
            <textarea/>
          </div>
        );
      case 'textfield':
        fieldType = 'text';
        break;
      case 'checkbox':
        fieldType = 'checkbox';
        break;
      case 'datefield':
        fieldType = 'date';
        break;
      case 'radioButtons':
        fieldType = 'radio';
        break;
      default:
        return null;
    }

    return (
      <div className="wrapField">
        <div className="label">
          <span>{label}</span>
        </div>
        <input type={fieldType} name="radio"/>
      </div>
    );
  }

  config(key) {
    const { obj } = this.props;

    switch (key) {
      case 'items':
        return obj[key].map((item) => this.field(item));
      case 'buttons':
        return obj[key].map((value) => this.formButtons(value));
      default:
        return null;
    }
  }

  render() {
    const { obj } = this.props;

    const headerLabel = obj.headerLabel || 'Default form';

    return (
      <div className="resultWrap">
        <fieldset>
          <legend>{headerLabel}</legend>
          <form onSubmit={() => null}>
            {Object.keys(obj).map((key) => this.config(key))}
          </form>
        </fieldset>
      </div>
    );
  }
}

export default Result;
