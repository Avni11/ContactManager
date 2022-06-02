import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Header from "./component/Header";
import ContactList from "./component/ContactList";
import ContactCard from "./component/ContactCard";
import AddContact from "./component/AddContact";
const routing = (
  <Router>
    <div>
      <Header />
      <Link to="/"></Link>
      <Route path="/" component={ContactList}></Route>
      <Route path="/add" component={AddContact}></Route>
    </div>
  </Router>
);
export { routing };
