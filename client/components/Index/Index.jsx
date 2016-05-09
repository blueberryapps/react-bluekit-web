import CopyCode from './CopyCode';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BlueKit from 'react-bluekit';
import componentsIndex from '../../componentsIndex';
import {Scrollspy} from 'react-scrollspy';
import {StyleRoot} from 'radium';

class IndexComponent extends Component {
  state = {
    copied: false,
    codeStyle: 'babel'
  }

  changeStyle(event, codeStyle) {
    this.setState({codeStyle})
    event.preventDefault()
  }

  render() {
    const {codeStyle} = this.state
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
              <h1 className="logo"><img src="client/images/logo.svg" alt="BlueKit" /></h1>
              <p>Render React components with editable source and live preview</p>
              <p><span className="label label-primary">npm install react-bluekit --save</span></p>

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

            <h2 className="h3" id="setup-content">Analyze your components</h2>
            <p>Add the following lines to your gulp file:</p>

            <ul className="tabs">
              <li className={codeStyle === 'babel' && 'active'}><a href='/' onClick={(e) => this.changeStyle(e, 'babel')}>Babel</a></li>
              <li className={codeStyle === 'es5' && 'active'}><a href='/' onClick={(e) => this.changeStyle(e, 'es5')}>ES5</a></li>
            </ul>

            <div className="code">
              <pre>
                {this.renderCodeCreate()}
              </pre>
            </div>

            <p>Then run <code>gulp build-bluekit</code> to generate information about your components:</p>

            <div className="code">
              <pre>
                {this.renderCodeInsert()}
              </pre>
            </div>

            <p>You can also setup BlueKit to be built on application start and then to watch for component changes using the <code>watch-bluekit</code> task:</p>

            <div className="code">
              <pre>
                {this.renderCodeWatch()}
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
              <p className="more"><a href="http://www.blueberry.cz">&hellip;learn more about our projects</a></p>
            </div>
          </div>
        </footer>

      </StyleRoot>
    );
  }

  renderCodeInsert() {
    const {codeStyle} = this.state
    const babelSource = `import Bluekit from 'react-bluekit';\nimport componentsIndex from './componentsIndex';\n\n<BlueKit\n componentsIndex={componentsIndex}\n inline // display inline (not full page)\n/>`
    const esSource = `var Bluekit = require('react-bluekit').default;\nvar componentsIndex = require('./componentsIndex').default;\n\n<BlueKit\n componentsIndex={componentsIndex}\n inline // display inline (not full page)\n/>`

    return codeStyle === 'babel'
      ? <div>
          <code>
            {babelSource}
          </code>
          {this.renderCopyCode(babelSource)}
        </div>
      : <div>
          <code>
            {esSource}
          </code>
          {this.renderCopyCode(esSource)}
        </div>

  }

  renderCodeCreate() {
    const {codeStyle} = this.state
    const babelSource = `import createBlueKit from 'react-bluekit/lib/createBlueKit';\n\ncreateBlueKit({\n // your directory where components are located\n baseDir: \`\${__dirname}/src/browser\`\,\n // relative paths from base dir where to look for components\n paths: ['./components', './auth']\n});`

    const esSource = `var createBlueKit = require('react-bluekit/lib/createBlueKit').default;\n\ncreateBlueKit({\n // your directory where components are located\n baseDir: __dirname + '/src/browser'\,\n // relative paths from base dir where to look for components\n paths: ['./components', './auth']\n});`

    return codeStyle === 'babel'
      ? <div>
          <code dangerouslySetInnerHTML={{__html: babelSource}} />
          {this.renderCopyCode(babelSource)}
        </div>
      : <div>
          <code dangerouslySetInnerHTML={{__html: esSource}} />
          {this.renderCopyCode(esSource)}
        </div>
  }

  renderCodeWatch() {
    const {codeStyle} = this.state
    const code = `gulp.task('default', ['build-bluekit', 'server', 'watch-bluekit']);`

    return (
      <div>
        <code dangerouslySetInnerHTML={{__html: babelSource}} />
        {this.renderCopyCode(babelSource)}
      </div>
    )
  }

  renderCopyCode(source) {

    return <CopyCode source={source} />
  }

  onCopy() {
    this.setState({copied: true})
    setTimeout(() => this.setState({copied: false}), 3000)
  }

}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
