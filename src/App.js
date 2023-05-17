import "./App.css";
import { Navbar } from "./Components/Common/Navbar";
import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
