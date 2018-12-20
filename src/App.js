import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import MyPage from './routes/MyPage';
import Login from './routes/Login';
import Search from './routes/Search';
import NoMatch from './routes/NoMatch';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <div>
                    {/* Switch Component 가 있으면 매칭되는 1개만 보여주는 컴포넌트 */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/about/:username"
                            component={About}
                        />
                        <Route path="/posts" component={Posts} />
                        <Route path="/me" component={MyPage} />
                        <Route path="/login" component={Login} />
                        <Route path="/search" component={Search} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
