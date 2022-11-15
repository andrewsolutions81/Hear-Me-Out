import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          < Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
