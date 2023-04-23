import React from 'react'
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./common/Header";
import Footer from "./common/Footer";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Blogdetails from "./components/Blogdetails";
class App extends React.Component {
  render(){
    return(
      <Router>
<Header></Header>
      <Switch>

      
        
          <Route exact path="/" component={Home} /> 
          <Route exact path="/about" component={About} /> 
          <Route exact path="/service" component={Service} /> 
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blogdetails" component={Blogdetails} />
          
        </Switch>
        <Footer></Footer>
     </Router>

    )
}
}


export default App