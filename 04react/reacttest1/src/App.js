import React from "react";
import Button from "./components/Button";
import "./index.css";

function App() {
  return (
    <div>
      <Button textOnly={false} className="btn-primary">
        click
      </Button>
      <br></br>
      <Button textOnly={false} className="btn-info">
        out
      </Button>
    </div>
  );
}

export default App;
