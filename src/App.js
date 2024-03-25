import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  return (
    <div className="">
      <h1>User List</h1>
      <hr />
      <div>
        <Form />
      </div>
      <List />
    </div>
  );
}

export default App;
