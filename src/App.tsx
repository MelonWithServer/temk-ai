// ❌ Удали это:
// import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AiAgents from './pages/AiAgents';

function App() {
  return (
    // ❌ Не оборачивай в BrowserRouter тут
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ai-agents" element={<AiAgents />} />
    </Routes>
  );
}

export default App;
