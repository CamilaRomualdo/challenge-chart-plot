import React from 'react';

import './css/view.css'

import {ResponsiveMonacoEditor} from "responsive-react-monaco-editor";

class InputView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            placeholder: '// Enter your code here.',
        }
        this.editorRef = React.createRef();
    }

    componentDidMount = () => {
        // Input view size.
        this.editorRef.current.style.height = "210px";
    }

    // https://github.com/react-monaco-editor/react-monaco-editor
    onChange = (newValue) => {
        this.props.submit(newValue);
    }

    render() {
        return (
            <div className="inputView-container" ref={this.editorRef}>
                <ResponsiveMonacoEditor
                    language="javascript"
                    theme="vs-dark"
                    value={this.props.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default InputView;
