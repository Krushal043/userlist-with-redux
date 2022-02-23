import React from 'react'
import './styles/App.scss';
import Navbar from './components/models/Navbar'
import Contacts from './components/users/Users'
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import AddContact from './components/models/AddUsers'
import EditContact from './components/models/EditUser'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
              <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
