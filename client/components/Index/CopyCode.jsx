import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import React, {Component, PropTypes as RPT} from 'react';

export default class CopyCode extends Component {

  static propTypes = {
    source: RPT.string
  }

  state = {
    copied: false
  }

  render() {
    const {copied} = this.state
    const {source} = this.props

    return (
      <div className="copy-wrapper">
        <CopyToClipboard onCopy={this.onCopy.bind(this)} text={source}>
          <div className={classNames('copy-icon', {'copied': copied})}>
            <div className="tooltip">
              Copied
            </div>
          </div>
        </CopyToClipboard>
      </div>
    )
  }

  onCopy() {
    this.setState({copied: true})
    setTimeout(() => this.setState({copied: false}), 3000)
  }

}
