import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
