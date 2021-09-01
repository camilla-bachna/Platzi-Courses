import "./App.css";
import HelloWorld from "./components/HelloWorld";
import ButtonClass from "./components/ButtonClass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <ButtonClass />
        {/*  <Button text="Click" /> */}
      </header>
    </div>
  );
}

export default App;
