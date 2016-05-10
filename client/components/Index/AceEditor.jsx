import AceEditorComponent from 'react-ace';
import CopyCode from './CopyCode';
import React, {Component, PropTypes as RPT} from 'react';

export default class AceEditor extends Component {

  static propTypes = {
    name: RPT.string,
    source: RPT.string,
  }

  render() {
    const {name, source} = this.props

    return (
      <div>
        <AceEditorComponent
          editorProps={{$blockScrolling: true}}
          fontSize={13}
          highlightActiveLine={false}
          maxLines={`${source}`.split(/\n/).length}
          mode="jsx"
          name={name}
          readOnly
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
          }}
          showGutter={false}
          showPrintMargin={false}
          theme="chrome"
          value={source}
          width="100%"
        />
        <CopyCode source={source} />
      </div>
    )
  }
}
