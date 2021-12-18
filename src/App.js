import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './pages/landingPage/Landing';
import Doc from './pages/docPage/Doc';
import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Join-us" element={<Doc/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
