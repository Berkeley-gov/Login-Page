import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationalBar from './components/utility-components/nav-bar.component';
import LoginPage from './components/login-page.component';
import HomePage from './components/home-page.component';
import AboutPage from './components/about-page.component';
import Footer from './components/utility-components/footer.component';

function App() {
  return (

      <Router>
        {/* Everything located within the Router tags is now accessible to the browser/client. This allows for component navigational functionality  */}
        <div className='App'>
            <NavigationalBar />
            {/* Route allows for the creation of URL paths that display a component/web page when their respective endpoints are hit. */}
            <Route path='/login' component={LoginPage} />
            <Route path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Footer />
        </div>
      </Router>
  );
}

export default App;
