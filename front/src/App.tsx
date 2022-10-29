import { FC } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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
import { useUserContext, emptyUser } from './context/user';
import { UserType } from './apollo/__generated__/globalTypes';

const App: FC = () => {
  const { pathname } = useLocation();
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const logout = (): void => {
    setUser(emptyUser);
    navigate('/');
  };

  return (
    <div className="app">
      {/* Le Header et le Footer ne sont pas affiché si l'utilisateur n'est pas connecté ou sur la page de connexion */}
      {pathname !== '/' && user?.logged && <Header logout={logout} />}
      <Routes>
        {/* Si l'utilisateur n'est pas connecté, il n'aura accès qu'a la page 403 
          Les routes pour les pages 404 & 403 sont tout le temps disponible afin d'en faire la démonstration rapidement */}
        <Route path="/" element={<Connection logout={logout} />} />
        <Route path="/accueil" element={user?.logged ? <Home /> : <Error403 />} />
        <Route path="/creer-un-ticket" element={user?.logged ? <AddTicket /> : <Error403 />} />
        <Route path="/tickets" element={user?.logged ? <Tickets /> : <Error403 />} />
        <Route path="/ticket/:id" element={user?.logged ? <Ticket /> : <Error403 />} />
        <Route path="/employes" element={user?.logged ? <Employees /> : <Error403 />} />
        <Route path="/ajout-employe" element={user?.logged ? <AddEmployee /> : <Error403 />} />
        <Route path="/clients" element={user?.logged ? <Clients /> : <Error403 />} />
        <Route path="/ajout-client" element={user?.logged ? <AddClient /> : <Error403 />} />
        <Route path="/messages" element={user?.logged ? <Messages /> : <Error403 />} />
        <Route path="/ajout-message" element={user?.logged ? <AddMessage /> : <Error403 />} />
        <Route
          path="/profil"
          element={user?.logged && user?.userType === UserType.employee ? <Profile /> : <Error403 />}
        />
        <Route path="/cgu" element={user?.logged ? <GTCU /> : <Error403 />} />
        <Route path="/mentions-legales" element={user?.logged ? <LegalMentions /> : <Error403 />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/403" element={<Error403 />} />
      </Routes>
      {pathname !== '/' && user?.logged && <Footer />}
    </div>
  );
};

export default App;
