import BlueKit from 'react-bluekit';
import React, { Component } from 'react';
import componentsIndex from '../../componentsIndex';

export default class Demo extends Component {
  render() {
    return (
      <div className="bluekit-demo">
        <BlueKit componentsIndex={componentsIndex} />
      </div>
    );
  }
}
