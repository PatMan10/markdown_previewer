//--------CSS----------------
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@patman10/kickstart.css/dist/kickstart.min.css";
import "./app.css";
//--------LIBS----------------
import React from "react";
//--------UI_COMP----------------
import Editor from "./ui_components/editor/Editor";
import Previewer from "./ui_components/previewer/Previewer";

interface Props {}

interface State {
  editorText: string;
  editorIsExpanded: boolean;
  editorIsVisible: boolean;
  previewerIsExpanded: boolean;
  previewerIsVisible: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editorText: "# Some heading",
      editorIsExpanded: false,
      editorIsVisible: true,
      previewerIsExpanded: false,
      previewerIsVisible: true
    };
  }

  onChangeEditorText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ editorText: e.target.value });
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
