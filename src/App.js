import { Topbar } from "./components/Topbar";
import { Cardbox } from "./components/Cardbox";


// important notes
// --first firing empty object not fixed but prevented from causing a bad render
// --placement of text box dependent on size of text

function App() {
  return (
    <div className="bg-blue-700">
      <Topbar />
      <Cardbox />
    </div>
  );
}

export default App;
