import { useState } from "react";

import Preview from "./components/Preview";

const getNiceName = (type: string) => {
  switch (type) {
    case "text/plain":
      return "Plaintext";
    case "text/html":
      return "HTML";
    case "text/rtf":
      return "Rich Text";
    case "text/csv":
    case "text/comma-separated-values":
      return "Comma-Separated Values";
    case "text/tsv":
    case "text/tab-separated-values":
      return "Tab-Separated Values";
    case "application/x-slate-fragment":
      return "Slate Fragment";
    case "application/x-opvia-table-data":
      return "Opvia Table Data";
    case "vscode-editor-data":
      return "Visual Studio Code";
  }

  return null;
};

function App() {
  const [dataTransfer, setDataTransfer] = useState<DataTransfer | null>(null);

  return (
    <div className="p-5 flex flex-col gap-5 max-w-full">
      <input
        className="p-5 w-full"
        type="text"
        id="paste"
        name="paste"
        value=""
        readOnly
        placeholder="Focus this input and paste"
        onPaste={(e) => setDataTransfer(e.clipboardData)}
      />
      {dataTransfer &&
        dataTransfer.types.map((type) => {
          const niceName = getNiceName(type);
          return (
            <div key={type} className="max-w-full border-l-2 pl-5">
              {niceName ? (
                <h1>
                  <b>{niceName}</b> ({type})
                </h1>
              ) : (
                <h1>
                  <b>{type}</b>
                </h1>
              )}
              <Preview
                key={type}
                type={type}
                data={dataTransfer.getData(type)}
              />
            </div>
          );
        })}
    </div>
  );
}

export default App;
