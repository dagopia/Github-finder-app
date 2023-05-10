import logo from "./logo.svg";
import "./App.css";
import MenuAppBar from "./componenet/AppBar";
import SearchAccount from "./componenet/Search";
import Footer from "./componenet/Footer";
function App() {
  return (
    <div className='App'>
      <MenuAppBar />
      <SearchAccount />
      <Footer />
    </div>
  );
}

export default App;
