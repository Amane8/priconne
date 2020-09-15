import React from 'react';
import Main from './Main.js';
import Guilds from './Guilds.js';
import Tiers from './Tiers.js';
import { Link, Switch, Route } from 'react-router-dom';

function App() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/tiers'>Tiers</Link>
                    </li>
                    <li>
                        <Link to='/guilds'>Guilds</Link>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/tiers' component={Tiers} />
                <Route path='/guilds' component={Guilds} />
                <Route path='' component={Main} />
            </Switch>
        </>
    )
}

export default App;