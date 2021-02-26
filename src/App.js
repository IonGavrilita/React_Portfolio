
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';

function App() {
  
  return (    
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path={["/", "/react-portfolio/about", "/react-portfolio", "/about"]} ><About/></Route>         
        <Route exact path="/react-portfolio/contact"><Contact/></Route>
        <Route exact path="/react-portfolio/portfolio" ><Portfolio/></Route>
        <Route path="/react-portfolio/resume" ><Resume/></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
