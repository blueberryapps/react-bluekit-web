import { Link } from 'react-router';
import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import AceEditor from './AceEditor';

class IndexComponent extends Component {

  state = {
    codeStyle: 'babel'
  }

  changeStyle(event, codeStyle) {
    this.setState({ codeStyle });
    event.preventDefault();
  }

  renderCodeInsert() {
    const { codeStyle } = this.state;
    const babelSource = `import Bluekit from 'react-bluekit';\nimport componentsIndex from './componentsIndex';\n\n<BlueKit\n componentsIndex={componentsIndex}\n inline // display inline (not full page)\n/>`;
    const esSource = `var Bluekit = require('react-bluekit').default;\nvar componentsIndex = require('./componentsIndex').default;\n\n<BlueKit\n componentsIndex={componentsIndex}\n inline // display inline (not full page)\n/>`;

    return <AceEditor name="sourceCodeInsert" source={codeStyle === 'babel' ? babelSource : esSource} />;
  }

  renderCodeCreate() {
    const { codeStyle } = this.state;
    const babelSource = `import createBlueKit from 'react-bluekit/lib/createBlueKit';\n\ncreateBlueKit({\n // your directory where components are located\n baseDir: \`\${__dirname}/src/browser\`\,\n // relative paths from base dir where to look for components\n paths: ['./components', './auth']\n});`;

    const esSource = `var createBlueKit = require('react-bluekit/lib/createBlueKit').default;\n\ncreateBlueKit({\n // your directory where components are located\n baseDir: __dirname + '/src/browser'\,\n // relative paths from base dir where to look for components\n paths: ['./components', './auth']\n});`;

    return <AceEditor name="sourceCodeCreate" source={codeStyle === 'babel' ? babelSource : esSource} />;
  }

  renderCodeWatch() {
    const code = "gulp.task('default', ['build-bluekit', 'server', 'watch-bluekit']);";

    return <AceEditor name="sourceCodeWatch" source={code} />;
  }

  render() {
    const { codeStyle } = this.state;

    return (
      <StyleRoot>
        <section>

          <div className="block block-hp-top">
            <a className="github-fork left-top" title="Fork me on GitHub" href="https://github.com/blueberryapps/react-bluekit">
              Fork me on github
            </a>

            <div className="block-content">
              <h1 className="logo"><img src="client/images/logo.svg" alt="BlueKit" /></h1>
              <p>Render React components with editable source and live preview</p>
              <p><span className="label label-primary">npm install react-bluekit --save</span></p>

              <div className="sample">
                <Link to="demo">
                  <img src="client/images/bluekit-preview.png" alt="BlueKit sample" />
                  <div className="overlay">
                    <span className="overlay-text">
                      Open fullpage demo
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="block block-hp-sample">
            <div className="block-content">

              <h2 className="h3">Analyze your components</h2>
              <p>Add the following lines to your gulp file:</p>

              <ul className="tabs">
                <li className={codeStyle === 'babel' && 'active'}><a href="/" onClick={e => this.changeStyle(e, 'babel')}>Babel</a></li>
                <li className={codeStyle === 'es5' && 'active'}><a href="/" onClick={e => this.changeStyle(e, 'es5')}>ES5</a></li>
              </ul>

              <div className="code">
                <pre>
                  {this.renderCodeCreate()}
                </pre>
              </div>

              <p>Then run <code className="inlineCode">gulp build-bluekit</code> to generate information about your components:</p>

              <div className="code">
                <pre>
                  {this.renderCodeInsert()}
                </pre>
              </div>

              <p>You can also setup BlueKit to be built on application start and then to watch for component changes using the <code className="inlineCode">gulp watch-bluekit</code> task:</p>

              <div className="code">
                <pre>
                  {this.renderCodeWatch()}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer block">
          <div className="block-content">
            <div className="footer-holder">
              <p className="made"><span>Made with <img src="client/images/heart.svg" alt="love" /> by</span></p>
              <p className="logo"><a href="http://www.blueberry.io"><img src="client/images/logo-blueberry.svg" alt="Blueberry" /></a></p>
              <p className="more"><a href="https://github.com/blueberryapps">&hellip;learn more about our projects</a></p>
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
