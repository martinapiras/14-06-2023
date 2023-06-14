import { todoList } from "./mocks/todos";
import List from "./components/List";
import "./App.css";

function App() {
  return <List title="To-do list" items={todoList}></List>;
}

export default App;
