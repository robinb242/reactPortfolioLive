
import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import {
   Container
} from 'semantic-ui-react';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import SocialSideNav from './components/SocialSideNav/SocialSideNav';

import "./App.css";


const App = () => (
<Router>
    <div>
    <Container>
      <Nav />
        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />

      </Switch>

      
      <Footer />
      </Container>
    </div>
 </Router>

);

export default App;