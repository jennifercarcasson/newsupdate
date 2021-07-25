import './App.css';
import Home from './pages/Home';
import Header from './containers/Header';
import Footer from './containers/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import International from './pages/International';
import Politics from './pages/Politics';
import Shows from './pages/Shows';
import Sports from './pages/Sports';
import Tech from './pages/Tech';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/international">
              <International />
            </Route>
            <Route exact path="/politics">
              <Politics />
            </Route>
            <Route exact path="/shows">
              <Shows />
            </Route>
            <Route exact path="/sports">
              <Sports />
            </Route>
            <Route exact path="/tech">
              <Tech />
            </Route>
            <Route exact path="/search/:query">
              <Search />
            </Route>
            <Route path="/">
              {
                //default route
              }
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
