import "./App.css";
import Counter from "./Counter";
import Accordion from "./Accordion";
import Input from "./Input";
const Greeting = ({ greeting, name = "Bro" }) => {
  return (
    <h1>
      {greeting} {name}
    </h1>
  );
};

function App() {
  return (
    <div className="App">
      <Input />
      <Greeting greeting="Yo" name="Nigga" />
      <Greeting greeting="Sup" />
      <Counter />
      <Accordion/>
    </div>
  );
}
export default App;
