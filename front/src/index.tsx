import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apollo';

import App from './App';
import { ContextProvider } from './context/user';
import './styles/index.scss';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <Router>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Router>
    </ApolloProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
