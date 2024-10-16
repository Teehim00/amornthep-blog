import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <h1 className="bg-red-500">My First React App on Vite</h1>
      </section>
    </>
  );
}

export default App;
