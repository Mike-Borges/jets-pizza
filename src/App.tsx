import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import CustomizePage from './pages/Customize/CustomizePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/customize/:slug" element={<CustomizePage />} />
      </Routes>
    </div>
  );
}

export default App;