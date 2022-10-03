import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Connection from './pages/Connection';
import './styles/index.scss';

const App: FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Connection />} />
    </Routes>
  </div>
);

export default App;
