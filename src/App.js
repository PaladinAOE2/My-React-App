import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Privacy from './Privacy';
import Help from './Help';
import NotFound from './NotFound';
import Create from './Create';

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
                        <Route path="/privacy">
                            <Privacy />
                        </Route>
                        <Route path="/help">
                            <Help />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
        </div>
        </Router>

    );
}

export default App;
