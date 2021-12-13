import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

import './App.css';

function App() {
  const token = sessionStorage.getItem('accessToken');
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">{!token ? <LoginPage /> : <Dashboard />}</Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
