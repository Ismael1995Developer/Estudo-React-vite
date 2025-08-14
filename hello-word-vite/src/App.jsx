import { useState } from "react";

// Style/Css
import "./App.css";

//Componentes
import FirstComponents from "./components/FirstComponents";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Eventos from "./components/events";
import Challenge from "./components/Challenge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello world</h1>
        <h2>Estudando React</h2>
        <p>ismael</p>
        <FirstComponents />
        <TemplateExpressions />
        <MyComponent />
        <Eventos />
        <Challenge />
      </div>
    </>
  );
}

export default App;
