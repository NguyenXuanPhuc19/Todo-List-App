import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="max-w-2xl mx-auto  pt-12  px-6">
        <Header />
        <main>
          <TodoForm />
          <TodoList />
        </main>
      </div>
    </div>
  );
}

export default App;
