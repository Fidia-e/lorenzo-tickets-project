import { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Connection from './pages/Connection';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Connection />} />
      </Routes>
    </div>
  );
};

export default App;
