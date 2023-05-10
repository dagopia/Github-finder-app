import logo from "./logo.svg";
import "./App.css";
import MenuAppBar from "./componenet/AppBar";
import SearchAccount from "./componenet/Search";
function App() {
  return (
    <div className='App'>
      <MenuAppBar />
      <SearchAccount />
    </div>
  );
}

export default App;
