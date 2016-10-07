import AceEditor from './AceEditor';
import BlueKit from 'react-bluekit';
import componentsIndex from '../../componentsIndex';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link, Element} from 'react-scroll';
import {StyleRoot} from 'radium';

class IndexComponent extends Component {
  state = {
    codeStyle: 'babel'
  }

  changeStyle(event, codeStyle) {
    this.setState({codeStyle})
    event.preventDefault()
  }

  render() {
    const {codeStyle} = this.state
    const smallDevice = (window.innerWidth < 600) ? true : false

    return (
      <StyleRoot>
        <section>

          <div className="block block-hp-top">
            <a className="github-fork left-top" title="Fork me on GitHub" href="https://github.com/blueberryapps/react-bluekit" target="_blank">
              Fork me on github
            </a>

            <div className="one-page-nav">
              <ul>
                <li>
                  <Link activeClass="active" to="sample" spy={true} smooth={true} offset={-50} duration={400}>
                    Preview<div className="hexagon"><span></span></div>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="setup-content" spy={true} smooth={true} offset={20} duration={400}>
                    Set up<div className="hexagon"><span></span></div>
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="credits" spy={true} smooth={true} duration={400}>
                    Credits<div className="hexagon"><span></span></div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="block-content">
              <h1 className="logo"><img src="client/images/logo.svg" alt="BlueKit" /></h1>
              <p>Render React components with editable source and live preview</p>
              <p><span className="label label-primary">npm install react-bluekit --save</span></p>

              <Element name="sample">
                <div className="sample">
                  {!smallDevice
                    ? <BlueKit componentsIndex={componentsIndex} inline />
                    : <img src="client/images/sample.jpg" alt="BlueKit sample" />
                  }
                </div>
              </Element>
            </div>
          </div>

          <Element name="setup-content">
            <div className="block block-hp-sample">
              <div className="block-content">

                <h2 className="h3">Analyze your components</h2>
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

                <p>Then run <code className='inlineCode'>gulp build-bluekit</code> to generate information about your components:</p>

                <div className="code">
                  <pre>
                    {this.renderCodeInsert()}
                  </pre>
                </div>

                <p>You can also setup BlueKit to be built on application start and then to watch for component changes using the <code className='inlineCode'>gulp watch-bluekit</code> task:</p>

                <div className="code">
                  <pre>
                    {this.renderCodeWatch()}
                  </pre>
                </div>
              </div>
            </div>
          </Element>
        </section>

        <Element name="credits">
          <footer className="footer block">
            <div className="block-content">
              <div className="footer-holder">
                <p className="made"><span>Made with <img src="client/images/heart.svg" alt="love" /> by</span></p>
                <p className="logo"><a href="http://www.blueberry.io/" target="_blank"><img src="client/images/logo-blueberry.svg" alt="Blueberry" /></a></p>
                <p className="more"><a href="https://github.com/blueberryapps">&hellip;learn more about our projects</a></p>
              </div>
            </div>
          </footer>
        </Element>

      </StyleRoot>
    );
  }

  renderCodeInsert() {
    const {codeStyle} = this.state
    const babelSource = `import Bluekit from 'react-bluekit';\nimport componentsIndex from './componentsIndex';\n\n<BlueKit\n componentsIndex={componentsIndex}\n inline // display inline (not full page)\n/>`
    const esSource = `var Bluekit = require('react-bluekit').default;\nvar componentsIndex = require('./componentsIndex').default;\n\n<BlueKit\n componentsIndex={componentsIndex}\n inline // display inline (not full page)\n/>`

    return <AceEditor name='sourceCodeInsert' source={codeStyle === 'babel' ? babelSource : esSource} />
  }

  renderCodeCreate() {
    const {codeStyle} = this.state
    const babelSource = `import createBlueKit from 'react-bluekit/lib/createBlueKit';\n\ncreateBlueKit({\n // your directory where components are located\n baseDir: \`\${__dirname}/src/browser\`\,\n // relative paths from base dir where to look for components\n paths: ['./components', './auth']\n});`

    const esSource = `var createBlueKit = require('react-bluekit/lib/createBlueKit').default;\n\ncreateBlueKit({\n // your directory where components are located\n baseDir: __dirname + '/src/browser'\,\n // relative paths from base dir where to look for components\n paths: ['./components', './auth']\n});`

    return <AceEditor name='sourceCodeCreate' source={codeStyle === 'babel' ? babelSource : esSource} />
  }

  renderCodeWatch() {
    const {codeStyle} = this.state
    const code = `gulp.task('default', ['build-bluekit', 'server', 'watch-bluekit']);`

    return <AceEditor name='sourceCodeWatch' source={code} />
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
