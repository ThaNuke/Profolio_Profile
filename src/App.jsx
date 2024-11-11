import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Ex from './components/Ex';
import Why from './components/Why';
import Mypet from './components/Mypet';
import Addpet from './components/Addpet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* กำหนด Router ที่นี่ */}
      <div>
        {/* แสดง Header ในหน้าแรกและหน้าอื่นๆ */}
        <Routes>
          <Route path="/" element={<><Header /><Why /><Ex /></>} />
          <Route path="/ex" element={<><Header /><Ex /></>} />
          <Route path="/Mypet" element={<Mypet />} /> {/* หน้า Mypet ไม่ต้องการ Header */}
          <Route path="/Addpet" element={<Addpet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
