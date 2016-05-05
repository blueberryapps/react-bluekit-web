import React, { Component } from 'react';
import BlueKit from 'react-bluekit';
import componentsIndex from '../../componentsIndex';
import {Scrollspy} from 'react-scrollspy';
import {StyleRoot} from 'radium';

class IndexComponent extends Component {
  render() {
    return (
      <StyleRoot>
        <section>

          <div className="block block-hp-top">
            <a className="github-fork left-top" title="Fork me on GitHub" href="https://github.com/blueberryapps/react-bluekit-web" target="_blank">
              Fork me on github
            </a>

            <div className="one-page-nav">
              <Scrollspy items={ ['sample', 'setup', 'credits'] } currentClassName="active">
                <li><a href="#sample">Preview</a><div className="hexagon"><span></span></div></li>
                <li><a href="#setup-content">Set up</a><div className="hexagon"><span></span></div></li>
                <li><a href="#credits">Credits</a><div className="hexagon"><span></span></div></li>
              </Scrollspy>
            </div>

            <div className="block-content">
              <h1 className="logo"><img src="client/images/logo.svg" alt="Bluekit" /></h1>
              <p>Render React components with editable source and live preview</p>
              <p><span className="label label-primary">npm install component-playground</span></p>

              <div id="sample" className="sample">
                <BlueKit
                  componentsIndex={componentsIndex}
                  inline
                />
              </div>
            </div>
          </div>

          <div className="block block-hp-sample" id="setup">
          <div className="block-content">

            <h2 className="h3" id="setup-content">Set up</h2>
            <p>In your html document, add the required CodeMirror scripts at the bottom, before your bundle script:</p>

            <ul className="tabs">
              <li className="active"><a href="#tab-1">Style 1</a></li>
              <li><a href="#tab-1">Style 2</a></li>
              <li><a href="#tab-1">Style 3</a></li>
            </ul>

            <div className="code">
              <pre>
              &lt;script type=&quot;text/javascript&quot; src=&quot;//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.js&quot;&gt;&lt;/script&gt;
              &lt;script type=&quot;text/javascript&quot; src=&quot;//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/mode/javascript/javascript.min.js&quot;&gt;&lt;/script&gt;
              </pre>
            </div>

            <p>In your JSX, require the component as use it like this:</p>

            <div className="code">
              <pre>
              import Button from &rsquo;../components/Button.react.js
              &lt;Button
              kind=&rsquo;primary&rsquo;
              children=&rsquo;Default ANY&rsquo;
              &gt;
              Default ANY
              &lt;/Button&gt;
              </pre>
            </div>

          </div>
          </div>
        </section>

        <footer className="footer block" id="credits">
          <div className="block-content">
            <div className="footer-holder">
              <p className="made"><span>Made with <img src="client/images/heart.svg" alt="love" /> by</span></p>
              <p className="logo"><a href="http://www.blueberry.cz" target="_blank"><img src="client/images/logo-blueberry.svg" alt="Blueberry" /></a></p>
              <p className="more"><a href="#">&hellip;learn more about our projects</a></p>
            </div>
          </div>
        </footer>

      </StyleRoot>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
