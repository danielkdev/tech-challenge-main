import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
  );
}

export default App;
