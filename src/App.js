import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Viewemp from './components/Viewemp';
import Addemp from './components/Addemp';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Viewemp/>}></Route>
        <Route path='/add' element={<Addemp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
