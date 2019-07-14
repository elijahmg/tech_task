import React, { Component } from 'react'
import PropTypes from "prop-types";

import './style.css';

class Result extends Component {
  static propTypes = {
    obj: PropTypes.object,
  };

  formButtons(value) {
    return <input type="submit" value={value} />
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
            <span>{label}</span>
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
        <span>{label}</span>
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
        <legend>{headerLabel}</legend>
        <form>
          {Object.keys(obj).map((key) => this.config(key))}
        </form>
      </div>
    );
  }
}

export default Result;
