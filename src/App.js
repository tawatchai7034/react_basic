import "./App.css";
import HelloWorld from "./components/hello-world/hello-world";
import ShowList from "./components/hello-world/list-data";

function App() {
  return (
    <>
      <HelloWorld EmpName="Jonh"/>
      <ShowList />
    </>
  );
}

export default App;
