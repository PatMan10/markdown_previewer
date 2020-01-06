//--------CSS----------------
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "pmt-kickstart.css/src/kickstart.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
//--------LIBS----------------
import React from "react";
//--------UI_COMP----------------
import Editor from "./ui_components/editor/Editor";
import Previewer from "./ui_components/previewer/Previewer";

const App: React.FC = () => {
  return (
    <main className="lightBlue-bg flex-col-aiC p-10e">
      <Editor />
      <Previewer />
    </main>
  );
};

export default App;
