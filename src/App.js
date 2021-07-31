import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails.js';
import CreateBlog from './CreateBlog.js';
import Home from './Home.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/create">
              <CreateBlog />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
