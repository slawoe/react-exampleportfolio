import GlobalStyle from "./GlobalStyles";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path="/work">
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
