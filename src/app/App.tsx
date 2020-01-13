//--------CSS----------------
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@patman10/kickstart.css/dist/kickstart.min.css";
import "./app.css";
//--------LIBS----------------
import React from "react";
import marked from "marked";
//--------UI_COMP----------------
import Editor from "./ui_components/editor/Editor";
import Previewer from "./ui_components/previewer/Previewer";
//--------UTILS----------------
import C from "./utils/Constants";

interface Props {}

interface State {
  editorText: string;
  editorIsExpanded: boolean;
  editorIsVisible: boolean;
  previewerMarkup: string;
  previewerIsExpanded: boolean;
  previewerIsVisible: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const editorText = C.defaultText;
    const previewerMarkup = marked(editorText);
    this.state = {
      editorText,
      editorIsExpanded: false,
      editorIsVisible: true,
      previewerMarkup,
      previewerIsExpanded: false,
      previewerIsVisible: true
    };
  }

  onChangeEditorText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const markup = marked(text);
    this.setState({ editorText: text, previewerMarkup: markup });
  };

  expandEditor = () => {
    console.log("expand Editor");
    this.setState({
      editorIsExpanded: true,
      editorIsVisible: true,
      previewerIsExpanded: false,
      previewerIsVisible: false
    });
  };

  compressEditor = () => {
    console.log("compress Editor");
    this.setState({
      editorIsExpanded: false,
      editorIsVisible: true,
      previewerIsExpanded: false,
      previewerIsVisible: true
    });
  };

  expandPreviewer = () => {
    console.log("expand Previewer");
    this.setState({
      editorIsExpanded: false,
      editorIsVisible: false,
      previewerIsExpanded: true,
      previewerIsVisible: true
    });
  };

  compressPreviewer = () => {
    console.log("compress Previewer");
    this.setState({
      editorIsExpanded: false,
      editorIsVisible: true,
      previewerIsExpanded: false,
      previewerIsVisible: true
    });
  };

  render() {
    const {
      editorText,
      editorIsExpanded,
      editorIsVisible,

      previewerMarkup,
      previewerIsExpanded,
      previewerIsVisible
    } = this.state;

    return (
      <main className="lightBlue-bg flex-col-aiC p-10e">
        <Editor
          text={editorText}
          onChangeText={this.onChangeEditorText}
          isExpanded={editorIsExpanded}
          isVisible={editorIsVisible}
          expand={this.expandEditor}
          compress={this.compressEditor}
        />
        <Previewer
          markup={previewerMarkup}
          isExpanded={previewerIsExpanded}
          isVisible={previewerIsVisible}
          expand={this.expandPreviewer}
          compress={this.compressPreviewer}
        />
      </main>
    );
  }
}

export default App;
