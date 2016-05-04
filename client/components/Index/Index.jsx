import React, { Component } from 'react';
import BlueKit from 'react-bluekit';
import componentsIndex from '../../componentsIndex';
import {StyleRoot} from 'radium';

class IndexComponent extends Component {
  render() {
    return (
      <StyleRoot>
        <BlueKit
          componentsIndex={componentsIndex}
          inline
        />
      </StyleRoot>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
