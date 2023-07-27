import "./App.css";
import Date_Time from "./Date_Time";
import HelloWorld from "./HelloWorld";
function App() {
  return (
    <div>
      <div>
        <h1>NetFlix Pack</h1>
        <p>List of best five series:</p>
        <ol>
          <li>Dark</li>
          <li>Extra Curriculum</li>
          <li>My Holo Love</li>
          <li>My First Love</li>
          <li>Mr Robot</li>
        </ol>
      </div>
      <HelloWorld />
      <Date_Time />
    </div>
  );
}

export default App;
