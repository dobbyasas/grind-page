import './App.css'
import Home from "./pages/home/Home"
import Editor from './pages/editor/Editor';
import Counter from './pages/counter/Counter';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Editor' element={<Editor />}/>
      <Route path='/Counter' element={<Counter />}/>
    </Routes>
  );
}

export default App;
