import { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Connection from './pages/Connection';
import Home from './pages/Home';
import AddTicket from './pages/AddTicket';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import Clients from './pages/Clients';
import AddClient from './pages/AddClient';
import Messages from './pages/Messages';
import AddMessage from './pages/AddMessage';
import Profile from './pages/Profile';
import GTCU from './pages/GTCU';
import LegalMentions from './pages/LegalMentions';
import Error404 from './pages/Error404';
import Error403 from './pages/Error403';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEmployeeContext, emptyEmployee } from './context/employee';

const App: FC = () => {
  const { pathname } = useLocation();
  const { setEmployee } = useEmployeeContext();

  const logout = (): void => {
    setEmployee(emptyEmployee);
  };

  return (
    <div className="app">
      {pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/creer-un-ticket" element={<AddTicket />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/ticket/:id" element={<Ticket />} />
        <Route path="/employes" element={<Employees />} />
        <Route path="/ajout-employe" element={<AddEmployee />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/ajout-client" element={<AddClient />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/ajout-message" element={<AddMessage />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/cgu" element={<GTCU />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/403" element={<Error403 />} />
      </Routes>
      {pathname !== '/' && <Footer />}
    </div>
  );
};

export default App;
